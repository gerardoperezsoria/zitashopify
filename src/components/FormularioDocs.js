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


export default function TextFields({ handleformulario, clear }) {
  const classes = useStyles();
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    contacto: "",
    apepat:"",
    apemat:""
  });

  useEffect(() => {
    setFormulario({
      nombre: "",
      correo: "",
      contacto: "",
      apepat:"",
      apemat:""
    });
  }, [clear]);

  const handleChange = prop => event => {
    console.log("prop", event.target.value, prop)
    setFormulario({ ...formulario, [prop]: event.target.value });
    // handleformulario(formulario)
    handleformulario(prop, event.target.value)
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        required
        id="standard-number"
        label="Nombre completo"
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
        label="Apellido paterno"
        value={formulario.apepat}
        onChange={handleChange('apepat')}
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
        label="Apellido materno"
        value={formulario.apemat}
        onChange={handleChange('apemat')}
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
        label="Correo"
        value={formulario.correo}
        onChange={handleChange('correo')}
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
        label="Contacto"
        value={formulario.contacto}
        onChange={handleChange('contacto')}
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
