import React, { useEffect, useState } from 'react';
//import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
//import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Autocomplete from './elements/Autocomplete'
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


export default function FormularioPrecios({ handleformulario, clear, suggestions }) {
    let data = suggestions.map(row => ({
        value: row.idcatalogo,
        label: row.nombre,
    }));
    const classes = useStyles();
    const [formulario, setFormulario] = useState({
        pagina: "",
        pasillo: "",
        marca: "",
        idproducto: "",
        corrida: "",
        colores: "",
        corte: "",
        forro: "",
        plantilla: "",
        claves: "",
        sug_c: "",
        precio: "",
        modelo: "",
        fechas_observaciones: "",
        idcatalogo: ""
    });

    useEffect(() => {
        setFormulario({
            pagina: "",
            pasillo: "",
            marca: "",
            idproducto: "",
            corrida: "",
            colores: "",
            corte: "",
            forro: "",
            plantilla: "",
            claves: "",
            sug_c: "",
            precio: "",
            modelo: "",
            fechas_observaciones: "",
            idcatalogo: ""
        });
    }, [clear]);

    const handleChange = prop => event => {
        setFormulario({ ...formulario, [prop]: event.target.value });
        handleformulario({ [prop]: event.target.value })
    };

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <div className="buscador">
                <Autocomplete evento={handleChange('idcatalogo')} suggestions={data} />
            </div>
            <div className="campoidproducto">
                <TextField
                    required
                    id="standard-number"
                    label="Id producto"
                    value={formulario.idproducto}
                    onChange={handleChange('idproducto')}
                    type="text"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                />
            </div>
        </form>
    );
}
