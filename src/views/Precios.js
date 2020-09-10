import React, { useState, Fragment, useEffect } from 'react';
import FormularioPrecios from '../components/FormularioPrecios';
// import DropZone from '../components/DropZone'
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../components/elements/Button'
import ModalGenerico from '../components/elements/ModalGenerico'
import Stepper from '../components/elements/Stepper'
import Menu from '../components/Menu'
import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // useRouteMatch,
    // useParams,
    // Redirect
} from "react-router-dom";
const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    customWidth: {
        maxWidth: 500,
    },
    noMaxWidth: {
        maxWidth: 'none',
    },
}));



export default function Uploads() {
    const opcionesmenu = <Fragment>
        <div><Link to={`/crearcatalogos`}>Catalogos</Link></div>
        <div><Link to={`/articulos`}>Articulos</Link></div>

        <div><Link to={`/editararticulos`}>Editar articulos</Link></div>

        {/* <div><Link to={`/edicionproductos`}>Productos</Link></div> */}

    </Fragment>
    const [dropZone, setDropZone] = useState();
    const [formulario, setformulario] = useState();
    const [Catalogo, setCatalogo] = useState([{ label: 'Albania' }])
    const [dataClear, setDataClear] = useState("");

    const classes = useStyles();

    const handleformulario = (e) => {
        setformulario(e);
    }

    const handleDropZone = (e) => {
        e.datoxPeso = "prueba desde front"
        setDropZone(e);
    }

    const handleSubmit = async () => {
        var url = 'http://35.223.184.195:3007/createprecios';
        var data = {
            pagina: formulario.pagina,
            pasillo: formulario.pasillo,
            marca: formulario.marca,
            idproducto: formulario.idproducto,
            corrida: formulario.corrida,
            colores: formulario.colores,
            corte: formulario.corte,
            forro: formulario.forro,
            plantilla: formulario.plantilla,
            claves: formulario.claves,
            sug_c: formulario.sug_c,
            precio: formulario.precio,
            modelo: formulario.modelo,
            fechas_observaciones: formulario.fechas_observaciones,
            idcatalogo: formulario.idcatalogo
        };
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

        // setDatos(datosbusqueda);
        let dataJson = JSON.parse(datosbusqueda);
        if (dataJson.status === 200) {
            alert("Registro exitoso")
        }
        if (dataJson.status === 204) {
            alert("Ya existe el precio.")
        }
    }

    const catalogos = async () => {
        var url = 'http://35.223.184.195:3007/buscarcatalogos';
        // var data = { palabra: texto };
        let datosbusqueda = await fetch(url, {
            method: 'POST', // or 'PUT'
            // body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                return response;
            }
            );


        setCatalogo(datosbusqueda.catalogos);
        // idcatalogo: "12ff"
        // nombre: "Prueba de ctalog"
    }

    useEffect(() => {
        catalogos();
    }, [])

    return (
        <Fragment>
            <Menu opcionesmenu={opcionesmenu} />
            <div className="fondoFull">
                <div className="divHijo">
                    <div>
                        <Container fixed>
                            <FormularioPrecios suggestions={Catalogo} clear={dataClear} handleformulario={handleformulario} />
                            <Button textoButton="Guardar" evento={handleSubmit} />
                        </Container>
                    </div>
                </div>
            </div >
            <ModalGenerico ventana={'negocios'} title={"Pasos para vender con CarreRy."} contenido={<Stepper pasos={['Selecciona foto de tu producto', 'Llena el formulario una vez por cada producto ò paquete', 'Presiona guardar y listo, ya estas vendiendo en linea.']} />} />
        </Fragment>
    );
}

