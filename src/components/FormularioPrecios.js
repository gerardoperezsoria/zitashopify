import React, { useEffect, useState } from 'react';
//import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
//import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '../components/elements/Autocomplete'
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
        handleformulario({ ...formulario, [prop]: event.target.value })
    };

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                required
                id="standard-number"
                label="Página"
                value={formulario.pagina}
                onChange={handleChange('pagina')}
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
                label="Pasillo"
                value={formulario.pasillo}
                onChange={handleChange('pasillo')}
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
                label="Marca"
                value={formulario.marca}
                onChange={handleChange('marca')}
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
            <TextField
                required
                id="standard-number"
                label="Corrida"
                value={formulario.corrida}
                onChange={handleChange('corrida')}
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
                label="Colores"
                value={formulario.colores}
                onChange={handleChange('colores')}
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
                label="Corte"
                value={formulario.corte}
                onChange={handleChange('corte')}
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
                label="Forro"
                value={formulario.forro}
                onChange={handleChange('forro')}
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
                label="Plantilla"
                value={formulario.plantilla}
                onChange={handleChange('plantilla')}
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
                label="Claves"
                value={formulario.claves}
                onChange={handleChange('claves')}
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
                label="sug_c"
                value={formulario.sug_c}
                onChange={handleChange('sug_c')}
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
                label="Precio"
                value={formulario.precio}
                onChange={handleChange('precio')}
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
                label="Módelo"
                value={formulario.modelo}
                onChange={handleChange('modelo')}
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
                label="fechas_observaciones"
                value={formulario.fechas_observaciones}
                onChange={handleChange('fechas_observaciones')}
                type="text"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"
            />
            <Autocomplete evento={handleChange('idcatalogo')} suggestions={data} />
        </form>
    );
}
