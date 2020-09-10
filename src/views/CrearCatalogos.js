import React, { useState, Fragment } from 'react';
import FormularioCreaCatalogo from '../components/FormularioCreaCatalogo';
import DropZone from '../components/DropZone'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../components/elements/Button'
import ModalGenerico from '../components/elements/ModalGenerico'
import Stepper from '../components/elements/Stepper'
import Menu from '../components/Menu'
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
    const opcionesmenu = <Fragment>
        <div><Link to={`/precios`}>Precios</Link></div>        
        <div><Link to={`/articulos`}>Articulos</Link></div>
        <div><Link to={`/editararticulos`}>Editar articulos</Link></div>
    </Fragment>
    const [dropZone, setDropZone] = useState();
    const [formulario, setformulario] = useState();
    const [dataClear, setDataClear] = useState("");
    const longText = `Paso 1: Aqui puedes seleccionar o arrastrar la imagen de tu catalogo.`;
    const classes = useStyles();
    const handleformulario = (e) => {
        setformulario(e);
    }

    const handleDropZone = (e) => {
        setDropZone(e);
    }

    const handleSubmit = async () => {
        try {
            if ((dropZone !== undefined)
                && (formulario.nombre !== "")) {
                let form = new FormData();
                form.append('myFiles', dropZone);
                form.append('nombre', formulario.nombre);
                fetch('http://35.223.184.195:3007/creacatalogo', {
                    method: 'POST',
                    body: form,
                    'Content-Type': 'multipart/form-data',
                })
                    .then(res => res.json()).then((data) => {
                        let dataJSON = JSON.parse(data)
                        if (dataJSON.status === 200) {
                            setDataClear("")
                            alert("Registro exitoso!")
                        } else {
                        }

                    })
            } else {
                alert("Todos los datos son requeridos.!")
            }
        } catch (error) {

        }

    }

    return (
        <Fragment>
            <Menu opcionesmenu={opcionesmenu} />
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
                            <FormularioCreaCatalogo clear={dataClear} handleformulario={handleformulario} />
                            <Button textoButton="Guardar" evento={handleSubmit} />
                        </Container>
                    </div>
                </div>
            </div >
            <ModalGenerico  ventana={'negocios'} title={"Pasos para vender con CarreRy."} contenido={<Stepper pasos={['Selecciona foto de tu producto', 'Llena el formulario una vez por cada producto ò paquete', 'Presiona guardar y listo, ya estas vendiendo en linea.']} />} />
        </Fragment>
    );
}

