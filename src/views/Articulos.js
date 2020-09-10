import React, { useState, Fragment, useEffect } from 'react';
import Formulario from '../components/Formulario';
import DropZone from '../components/DropZone'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../components/elements/Button'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    Redirect
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
    const [dropZone, setDropZone] = useState();
    const [formulario, setformulario] = useState();
    const [Catalogo, setCatalogo] = useState([{ label: 'Albania' }])
    const [dataClear, setDataClear] = useState("");

    const longText = `Paso 1: Aqui puedes seleccionar o arrastrar la imagen tu articulo.`;

    const classes = useStyles();

    const handleformulario = (e) => {
        setformulario(e);
    }

    const handleDropZone = (e) => {
        setformulario(()=>{
            setDropZone(e)
        });
        
    }


    const handleSubmit = async () => {
        try {
            if ((dropZone !== undefined)){
                // && (formulario.nombre !== "")
                // && (formulario.descripcion !== "")
                // && (formulario.preciocompra !== "")
                // && (formulario.precioventa !== "")) {
                let form = new FormData();
                form.append('myFiles', dropZone);

                form.append('nombre', formulario.nombre);
                form.append('descripcion', formulario.descripcion);
                form.append('preciocompra', formulario.preciocompra);
                form.append('precioventa', formulario.precioventa);
                // fetch('http://35.223.184.195:3007/guardararticulos', {
                    fetch('http://localhost:3007/createproductos', {
                    method: 'POST',
                    body: form,
                    'Content-Type': 'multipart/form-data',
                })
                    .then(res => res.json()).then((data) => {
                        let dataJSON = JSON.parse(data)
                        if (dataJSON.status === 200) {
                            alert("Registro exitoso!")
                        }
                        if (dataJSON.status !== 200) {
                            alert("Error");
                        }

                    })
            } else {
                alert("Todos los datos son requeridos.!")
            }
        } catch (error) {

        }

    }

    useEffect(() => {

    }, [])

    return (
        <Fragment>
            <div className="fondoFull">
                <div className="divHijo">
                    <Container fixed>
                        <Typography component="div" style={{ backgroundColor: '#F7F7F7' }}>
                            <Tooltip title={longText} classes={{ tooltip: classes.customWidth }}>
                                <div className="drop-zone-container">
                                    <DropZone handleDropZone={handleDropZone} />
                                </div>
                            </Tooltip>
                        </Typography>
                    </Container>
                    <br></br>
                    <div>
                        <Container fixed>
                            <Formulario suggestions={Catalogo} clear={dataClear} handleformulario={handleformulario} />
                            <Button textoButton="Guardar" evento={handleSubmit} />
                        </Container>
                    </div>
                </div>
            </div >
            {/* <ModalGenerico ventana={'negocios'} title={"Mensaje"} contenido={<Stepper pasos={['Selecciona foto de tu producto', 'Llena el formulario una vez por cada producto ò paquete', 'Presiona guardar y listo, ya estas vendiendo en linea.']} />} /> */}
        </Fragment>
    );
}

