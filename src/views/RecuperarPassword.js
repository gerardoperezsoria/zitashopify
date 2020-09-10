import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '../components/elements/Button'
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
        password: ""
    });

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
        try {

            let form = new FormData();
            // form.append('myFiles', dropZone);
            alert()
            fetch('http://35.223.184.195:3006/recuperarpassword', {
                method: 'POST',
                body: form,
                'Content-Type': 'multipart/form-data',
            })
                .then(res => res.json()).then((data) => {
                    let dataJSON = JSON.parse(data)
                    if (dataJSON.status === 200) {

                    } else {

                    }

                })
        } catch (error) {
            alert("Todos los datos son requeridos.!")
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
                                label="Ingresa tu email."
                                value={formulario.password}
                                onChange={handleChange('password')}
                                type="text"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                            />
                        </form>
                        <Button evento={handleSubmit} />
                    </Container>
                </div>
            </div>
        </div >
    );
}