import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '../components/elements/Button'
import {
    Link,
    useParams,
    useHistory
} from "react-router-dom";
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
    const [formulario, setFormulario] = useState({
        email: "",
        password: "",
        repassword: "",
        telefono: "",
        cp: "",
        calle: "",
        numero: "",
        rfc: ""
    });
    const [datos, setDatos] = useState({ status: 200, uuid: '' });
    let history = useHistory();

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
        var url = 'http://35.223.184.195:3007/registro';
        var data = {
            email: formulario.email,
            password: formulario.password,
            repassword: formulario.repassword,
            telefono: formulario.telefono,
            cp: formulario.cp,
            calle: formulario.calle,
            numero: formulario.numero,
            rfc: formulario.rfc
        }

        let datosRegistro = await fetch(url, {
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
        let jsonData = JSON.parse(datosRegistro);
        history.push(`/pedidos/${jsonData.clave}`);
    }




    return (
        <div className="fondoFull">
            <div className="divHijo">
                <div>{datos.uuid}</div>
                <div>
                    <Container fixed>
                        <form className={classes.container} noValidate autoComplete="off">
                            <TextField
                                required
                                id="standard-number"
                                label="Ingresa tu email"
                                value={formulario.email}
                                onChange={handleChange('email')}
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
                                label="Ingresa tu password."
                                value={formulario.password}
                                onChange={handleChange('password')}
                                type="password"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                            />
                            <TextField
                                required
                                id="standard-number"
                                label="Repite tu password."
                                value={formulario.repassword}
                                onChange={handleChange('repassword')}
                                type="password"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                            />
                            <TextField
                                required
                                id="standard-number"
                                label="Ingresa tu telefono"
                                value={formulario.telefono}
                                onChange={handleChange('telefono')}
                                type="number"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                            />
                            <TextField
                                required
                                id="standard-number"
                                label="Ingresa tu código postal"
                                value={formulario.cp}
                                onChange={handleChange('cp')}
                                type="number"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                            />
                            <TextField
                                required
                                id="standard-number"
                                label="Ingresa tu calle"
                                value={formulario.calle}
                                onChange={handleChange('calle')}
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
                                label="Ingresa tu numero"
                                value={formulario.numero}
                                onChange={handleChange('numero')}
                                type="text"
                                className={classes.numero}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                            />
                            <TextField
                                required
                                id="standard-number"
                                label="Ingresa tu rfc"
                                value={formulario.rfc}
                                onChange={handleChange('rfc')}
                                type="text"
                                className={classes.numero}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                            />
                        </form>
                        <Button textoButton="Guardar" evento={handleSubmit} />
                    </Container>
                </div>
            </div>
        </div >
    );
}