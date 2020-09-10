import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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


export default function FormularioCreaCatalogo({ handleformulario, clear }) {
    const classes = useStyles();
    const [formulario, setFormulario] = useState({
        nombre: ""
    });

    useEffect(() => {
        setFormulario({
            nombre: ""
        });
    }, [clear]);

    const handleChange = prop => event => {
        setFormulario({ ...formulario, [prop]: event.target.value });
        handleformulario(formulario)

    };

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                required
                id="standard-number"
                label="Nombre del catálogo"
                value={formulario.nombre}
                onChange={handleChange('nombre')}
                type="text"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"
            />
        </form>
    );
}
