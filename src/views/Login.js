import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '../components/elements/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
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
        password: ""
    });
    let history = useHistory();
    // useEffect(() => {
    //     setFormulario({
    //         email: "",
    //         password: ""
    //     });
    // }, [clear]);

    const handleChange = prop => event => {
        setFormulario({ ...formulario, [prop]: event.target.value });
    };


    const handleSubmit = async () => {
        // var url = 'http://35.223.184.195:3007/login';
        var url = 'http://localhost:3007/login';
        var data = { email: formulario.email, password: formulario.password };
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
        let dataJson = JSON.parse(datosbusqueda);
        if (dataJson.status === 200) {
            if (dataJson.datos.perfil === "3") {
                history.push(`/prospectos`)
            } 
            else {
                history.push(`/celulares/pagina`)
            }

        } else {
            alert("Usuario no registrado.")
        }
    }

    return (
        <div className="fondoFull">
            <div className="divHijo">
                <div>
                    <Container fixed>

                        <form className={classes.container} noValidate autoComplete="off">
                            <TextField
                                required
                                id="standard-number"
                                label="Ingrese su email"
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
                                label="Ingrese su password"
                                value={formulario.password}
                                onChange={handleChange('password')}
                                type="password"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                            />
                        </form>
                        <Button textoButton="INICIAR" evento={handleSubmit} />
                        <Link to="/recuperapassword">Recuperar contraseña</Link>
                    </Container>
                </div>
            </div>
        </div >
    );
}