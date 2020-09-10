import React, { useEffect, useState, Fragment } from 'react';
import {
    Link,
    useParams
} from "react-router-dom";
import Container from '../components/Container'
// import '../components/CSS/home.css'
import Menu from '../components/Menu'

export default function Uploads() {
    const [datos, setDatos] = useState();
    let { idcatalogo, clavecliente, invitado } = useParams();
    const opcionesmenu = <Fragment>
        <div><Link to={`/porcatalogo/${idcatalogo}/${clavecliente}/${invitado}`}>Inicio</Link></div>
        <div><Link to={`/carrito/${idcatalogo}/${clavecliente}/${invitado}`}>Mi carrito</Link></div>
    </Fragment>
    useEffect(() => {
        window.onbeforeunload = function (e) {
            return 'Texto de aviso';
        };
        porcatalogo();
    }, [])


    // const porcatalogo = async () => {
    //     var url = 'http://35.223.184.195:3007/porcatalogo';
    //     var data = { idcatalogo, clavecliente };
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

    const porcatalogo = async () => {
        var url = 'http://35.223.184.195:3007/consultaproductos/3';
        // var data = { idcatalogo, clavecliente };
        let datosbusqueda = await fetch(url, {
            method: 'GET', // or 'PUT'
            // body: JSON.stringify(data), // data can be `string` or {object}!
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

    return (
        <Fragment>
            <Menu opcionesmenu={opcionesmenu} />
            <Container idcatalogo={idcatalogo} dataCard={datos} invitado={invitado} clavecliente={clavecliente} />
        </Fragment>
    );
}

