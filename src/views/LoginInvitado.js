import React, { useEffect, useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '../components/elements/Button';
import ModalGenerico from '../components/elements/ModalGenerico'
import { Link, useHistory, useParams } from "react-router-dom";
import Menu from '../components/Menu'
const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
}));


export default function TextFields({ handleformulario, clear }) {
    const classes = useStyles();
    const [datos, setDatos] = useState();
    const [modal, setModal] = useState(false);
    let history = useHistory();
    let { idcatalogo } = useParams();
    const [formulario, setFormulario] = useState({
        clavecliente: "",
        telefono: ""
    });
    const opcionesmenu = <Fragment>
        <div><Link to={`/catalogos/0/0/0`}>Atras</Link></div>
    </Fragment>
    // useEffect(() => {
    //     setFormulario({
    //         email: "",
    //         password: ""
    //     });
    // }, [clear]);

    const handleChange = prop => event => {
        let valor = event.target.value;
        let contador = valor.length;
        setFormulario({ ...formulario, [prop]: event.target.value });
        // if (prop === 'codigopostal') {
        //     if (valor !== "") {
        //         if ((valor.length > 0) && valor.length <= 5) {
        //             setFormulario({ ...formulario, [prop]: event.target.value });
        //         }
        //     }
        // } else if (prop === 'telefono') {
        //     if (valor !== "") {
        //         if ((contador > 0) && contador <= 10) {
        //             setFormulario({ ...formulario, [prop]: event.target.value });
        //         }
        //     }
        // }
        // else {
        //     setFormulario({ ...formulario, [prop]: event.target.value });
        // }


        // handleformulario(formulario)

    };


    const handleSubmit = async () => {
        var url = 'http://35.223.184.195:3007/validarinvitado';
        var data = { clavecliente: formulario.clavecliente, telefono: formulario.telefono };
        let datosValidacion = await fetch(url, {
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

        if (datosValidacion !== null) {
            history.push(`/porcatalogo/${idcatalogo}/${datosValidacion.clavecliente}/${formulario.telefono}`)
        } else {
            // history.push("/home/0/0")
            setModal(true);
        }
    }


    const handleClose = () => {
        setModal(false);
    };


    return (
        <div className="fondoFull">
            <div className="divHijo">
                <Menu opcionesmenu={opcionesmenu} />
                <div>
                    <Container fixed>
                        <form className={classes.container} noValidate autoComplete="off">
                            <TextField
                                required
                                id="standard-number"
                                label="Ingresa clave del cliente"
                                value={formulario.clavecliente}
                                onChange={handleChange('clavecliente')}
                                type="text"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                            />
                            <TextField
                                required
                                id="standard-number"
                                label="Ingresa número de telefono"
                                value={formulario.telefono}
                                onChange={handleChange('telefono')}
                                type="number"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                            />
                        </form>
                        <Button evento={handleSubmit} textoButton="Validar datos" />
                    </Container>
                </div>
                <ModalGenerico handleClose={handleClose} status={modal} ventana={'invitado'} title={"Información"} contenido={<div>Id del cliente incorrecto, vuelva a intentar.</div>} />
            </div>
        </div >
    );
}


