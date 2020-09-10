import React, {useState, Fragment, useEffect} from 'react';
import Formulario from '../components/FormularioDocs';
import DropZone from '../components/DropZone'
import {makeStyles} from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Steppercompra from '../HOCS/Stepper'
import {
    Link,
    useParams,
    useHistory
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}));

export default function Uploads() {
    const [dZ, setdZ] = useState();

    const [formularioS, setformularioS] = useState();
    const [formularioA, setformularioA] = useState();

    const [dataClear, setDataClear] = useState("");
    let history = useHistory();
    let {
        laboral,
        edad,
        ingreso
    } = useParams();

    const classes = useStyles();

    const handleformularioS = (prop, value) => {

        console.log("setformularioS", prop, value)
        setformularioS({
            ...formularioS,
            [prop]: value
        });
    }
    const handleformularioA = (e) => {
        setformularioA(e);
    }

    const handleDropZone = (File) => {
        debugger
        setdZ(File);
    }

    const handleSubmit = async () => {
        try {
            // if ((dropZone !== undefined)
            //     && (formulario.nombre !== "")
            //     && (formulario.descripcion !== "")
            //     && (formulario.preciocompra !== "")
            //     && (formulario.precioventa !== "")) {
            let form = new FormData();
            form.append('myFiles', dZ);


            form.append('nombres', formularioS.nombre);
            form.append('apepats', formularioS.apepat);
            form.append('apemats', formularioS.apemat);
            form.append('correos', formularioS.correo);
            form.append('contactos', formularioS.contacto);

            form.append('nombrea', formularioA.nombre);
            form.append('apepata', formularioA.apepat);
            form.append('apemata', formularioA.apemat);
            form.append('correoa', formularioA.correo);
            form.append('contactoa', formularioA.contacto);

            form.append('laboral', laboral);
            form.append('edad', edad);
            form.append('ingreso', ingreso);

            // fetch('http://35.223.184.195:3007/guardararticulos', {
            fetch('http://localhost:3007/guardardocumentos', {
                method: 'POST',
                body: form,
                'Content-Type': 'multipart/form-data'
            }).then(res => res.json()).then((data) => {
                let dataJSON = JSON.parse(data)
                if (dataJSON.status === 200) {
                    alert("Registro exitoso!")
                    // history.push(`/pago/${laboral}/${edad}/${ingreso}/${idProducto}/${descripcion}/${precioventa}/${formularioS.correo}/${formularioS.contacto}/${formularioS.nombre}/${formularioS.apepat}/${formularioS.apemat}`)
                    // <Route path="/pago/:laboral/:edad/:ingreso/:idProducto/:descripcion/:total/:email/:telefono/:nombre/:apepat/:apemat">
                    // history.push(`/pago`)
                    history.push(`/mensaje`)
                }
                if (dataJSON.status === 400) {
                    alert("Error");
                }

            })
            // } else {
            //     alert("Todos los datos son requeridos.!")
            // }
        } catch (error) {}

    }

    useEffect(() => {}, [])

    return (
        <Fragment>
            <Steppercompra paso={2}/>
            <br/>
            <Grid container
                spacing={3}>
                <Grid item
                    xs={0}
                    sm={2}></Grid>
                <Grid item
                    xs={12}
                    sm={8}>
                    <h2>Carga de documentos</h2>
                </Grid>
                <Grid item
                    xs={0}
                    sm={2}></Grid>

                <Grid item
                    xs={0}
                    sm={2}></Grid>
                <Grid item
                    xs={12}
                    sm={8}>
                    <Paper className={
                        classes.paper
                    }>
                        <h3>Datos del solicitante</h3>
                        <Formulario clear={dataClear}
                            handleformulario={handleformularioS}/>


                    </Paper>
                </Grid>
                <Grid item
                    xs={0}
                    sm={2}></Grid>

                <Grid item
                    xs={0}
                    sm={2}></Grid>
                <Grid item
                    xs={12}
                    sm={8}>
                    <Paper className={
                        classes.paper
                    }>
                        <h3>Datos del aval</h3>
                        <Formulario clear={dataClear}
                            handleformulario={handleformularioA}/>
                    </Paper>
                </Grid>
                <Grid item
                    xs={0}
                    sm={2}></Grid>

                <Grid item
                    xs={0}
                    sm={2}></Grid>
                <Grid item
                    xs={12}
                    sm={8}>
                    <h3>Coloque los siguientes documentos oficiales para identificarse</h3>
                </Grid>
                <Grid item
                    xs={0}
                    sm={2}></Grid>

                <Grid item
                    xs={0}
                    sm={2}></Grid>
                <Grid item
                    xs={12}
                    sm={4}>
                    <Paper className={
                        classes.paper
                    }>
                        <h4>Aval</h4>
                        <ul>
                            <li>INE Anverso(Frente)</li>
                            <li>INE Reverso</li>
                            <li>Comprobante de domicilio(No mayor a 4 meses)</li>
                            <li>Fotografia de rostro</li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item
                    xs={12}
                    sm={4}>
                    <Paper className={
                        classes.paper
                    }>
                        <h4>Solicitante</h4>
                        <ul>
                            <li>INE Anverso(Frente)</li>
                            <li>INE Reverso</li>
                            <li>Comprobante de domicilio(No mayor a 4 meses)</li>
                            <li>Fotografia de rostro</li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item
                    xs={0}
                    sm={2}></Grid>

                <Grid item
                    xs={0}
                    sm={2}></Grid>
                <Grid item
                    xs={12}
                    sm={8}>
                    <Paper className={
                        classes.paper
                    }>
                        <h5>Total de documentos a subir: 8</h5>
                        <DropZone handleDropZone={handleDropZone}/>
                    </Paper>
                </Grid>
                <Grid item
                    xs={0}
                    sm={2}></Grid>


                <Grid item
                    xs={0}
                    sm={2}></Grid>
                <Grid item
                    xs={12}
                    sm={8}>
                    {/* <Button textoButton="Continuar"
                        evento={handleSubmit}/> */}
                    <div className="botondiv">
                        <button className="submit"
                            onClick={handleSubmit}>
                            Siguiente
                        </button>
                    </div>
                </Grid>
                <Grid item
                    xs={0}
                    sm={2}></Grid>
            </Grid>
        </Fragment>
    );
}
