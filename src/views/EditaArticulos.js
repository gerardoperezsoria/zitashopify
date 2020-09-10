import React, { useEffect, useState, Fragment } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import SnackBar from '../components/SnackBar'
import ModalGenerico from '../components/elements/ModalGenerico'
import Stepper from '../components/elements/Stepper'
import {
    Link,
    useParams
} from "react-router-dom";
import Input from '../components/elements/Input'
import IconButton from '../components/elements/IconButton'
import Container from '../components/Container'
import Autocomplete from '../components/elements/Autocomplete'
import '../components/CSS/home.css'


export default function Uploads() {
    const [datos, setDatos] = useState([]);
    const [texto, setTexto] = useState();
    const [modal, setModal] = useState(false)

    const [formulario, setFormulario] = useState({
        catalogo: ""
    });

    let { cliente, invitado } = useParams();

    const opcionesmenu = <Fragment>
        <div><Link to={`/crearcatalogos`}>Catalogos</Link></div>
        <div><Link to={`/articulos`}>Articulos</Link></div>
        <div><Link to={`/precios`}>Precios</Link></div>
    </Fragment>

    // const initialC = async () => {
    //     let res = await fetch('http://35.223.184.195:3007/negocios', {
    //         method: 'POST',
    //         'Content-Type': 'multipart/form-data',
    //     })
    //         .then(res => res.json()).then(data => {
    //             return data;
    //         })
    //     setDatos(res);

    // }

    useEffect(() => {
        // catalogoInicial();
    }, [])


    // const catalogoInicial = async () => {
    //     var url = 'http://35.223.184.195:3007/productos';
    //     var data = { cliente, invitado };
    //     let datosbusqueda = await fetch(url, {
    //         method: 'POST', // or 'PUT'
    //         body: JSON.stringify(data), // data can be `string` or {object}!
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(res => res.json())
    //         .catch(error => console.error('Error:', error))
    //         .then(response => {
    //             return response;
    //         }
    //         );

    //     setDatos(datosbusqueda);
    // }

    const evento = async () => {

        var url = 'http://35.223.184.195:3007/productosxcatalogo';
        var data = { palabra: formulario.catalogo };

        let datosbusqueda = await fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                return response;
            }
            );

        setDatos(datosbusqueda);
    }

    // const eventoText = (palabra) => {
    //     setTexto(palabra)
    // }

    const handleChange = prop => event => {
        setFormulario({ ...formulario, [prop]: event.target.value });
        evento();
    };

    return (
        <Fragment>
            <div className="fondoFull">
                <div className="divHijo">
                    <div className="buscador">
                        <Autocomplete evento={handleChange('idcatalogo')} suggestions={datos} />
                    </div>
                    <br />
                    <div className="tarjetas">
                        <Container dataCard={datos} invitado={""} clavecliente={""} />
                    </div>                    
                </div>
            </div >
        </Fragment>
    );
}

