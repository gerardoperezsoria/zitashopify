import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '../components/elements/Autocomplete'


import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

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
    nombre: "",
    descripcion: "",
    preciocompra: "",
    precioventa: ""
  });

  useEffect(() => {
    setFormulario({
      nombre: "",
      descripcion: "",
      preciocompra: "",
      precioventa: ""
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
        label="Nombre"
        value={formulario.nombre}
        onChange={handleChange('nombre')}
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
        label="Precio compra"
        value={formulario.preciocompra}
        onChange={handleChange('preciocompra')}
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
        label="Precio venta"
        value={formulario.precioventa}
        onChange={handleChange('precioventa')}
        type="number"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />

<FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Descripción</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={formulario.descripcion}
            onChange={handleChange('descripcion')}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
    </form>
  );
}
