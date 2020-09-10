import React,{useState} from "react";
import { render } from "react-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import ModalGenerico from '../components/elements/ModalGenerico'
import TextField from '@material-ui/core/TextField';
import Input from '../components/elements/Input'
import IconButton from '../components/elements/IconButton'
import Container from '../components/Container'
import {makeStyles} from '@material-ui/core/styles';
import ButtonConIcon from '../components/elements/ButtonConIcon'
import Menu from '../components/Menu'
import Steppercompra from '../HOCS/Stepper'

import RadioGroup from '../Componentesnews/RadioGroup'
import { Form, Radio } from 'react-formik-ui';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    useHistory
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function DatosEnvio(){
    const classes = useStyles();
    let history = useHistory();
    let {
      id,
      precioventa,
      descripcion
  } = useParams();
const [Radiob, setRadiob] = useState(0)

  const evento = (e)=>{
    setRadiob(e)
  }
  


    return (
      <>
      <Steppercompra paso={1}/>
  <div className="app">
{/* datos del solicitante
    edad
     if >18
     else te pedimos que una persona mayor de edad realize el tramite
     ===================================00
    trabajas o estudias
    estudia o trabajas
    ingresos semanales
    ======================0
    trabajas dentro de la zona urbana
    si-> sigue
    no-> tiempo aproximado de traslado
    viven en la misma casa
    *********************************
    datos del aval
    edad
     if >18
     else te pedimos que una persona mayor de edad realize el tramite
     ===================================00
    trabajas o estudias
    estudia o trabajas
    ingresos semanales
    ======================0
    trabajas dentro de la zona urbana
    si-> sigue
    no-> tiempo aproximado de traslado
    viven en la misma casa
    trabajan en el mismo lugar */}

    <Formik
      initialValues={{ edad:"" }}
      onSubmit={async values => {
        history.push(`/documentos/${Radiob}/${values.edad}/${values.ingreso}/${precioventa}/${descripcion}/${id}`)
      }}
      validationSchema={Yup.object().shape({
          edad: Yup.number()
          .min(1, 'Solo 2 digitos!')
          .required('Required'),
          ingreso: Yup.number().required().positive().integer()
          // email: Yup.string()
          // .email()
          // .required("Required"),
          
          // calle: Yup.string()
          // .max(200, 'Too Long!')
          // .required('Required'),   
          
          // numext: Yup.string()
          // .max(200, 'Too Long!')
          // .required('Required'),   
          
          // numint: Yup.string()
          // .max(200, 'Too Long!')
          // .required('Required'),
          
          // cp: Yup.number()
          //   .min(5, 'Solo 10 digitos!')
          // .required('Required'),   
          
          // nombre: Yup.string()
          // .max(200, 'Too Long!')
          // .required('Required'),          
          
          // apepat: Yup.string()
          // .max(200, 'Too Long!')
          // .required('Required'),
          
          // apemat: Yup.string()
          // .max(200, 'Too Long!')
          // .required('Required'),                    
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        return (          
          <form onSubmit={handleSubmit}>
            <div className="contenidoDE">
              <div className={classes.root}>
              <Grid container spacing={3}>  
                        <Grid item xs={0} sm={2}></Grid>
                        <Grid item xs={12} sm={8}>
                        <h2 className="titulopanel">Datos socioeconómicos</h2>
                        </Grid>
                        <Grid item xs={0} sm={2}></Grid>
                        </Grid>


                        <Grid container spacing={3}>  
                        <Grid item xs={0} sm={2}></Grid>
                        <Grid item xs={12} sm={8}>
                        <Paper className={classes.paper}>
                        <h3>Solicitante</h3>
                        <div className="contenedorDE">
                        <div className="edad">
                            <TextField required id="edad" label="Edad"
                            type="number"
                                value={
                                    values.edad
                                }
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    classes.textField
                                }
                                placeholder=""
                                InputLabelProps={
                                    {shrink: true}
                                }
                                helperText={errors.edad && touched.edad && (
                                    <div className="input-feedback">{errors.edad}</div>
                                  )}
                                margin="normal"/>
                                            
                        </div>
                        <div className="laboral">
                      <RadioGroup evento={evento}/>
                                            
                        </div> 
                        <div className="ingreso">
                            <TextField required id="ingreso" label="Ingreso semanal"
                            type="number"
                                value={
                                    values.ingreso
                                }
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    classes.textField
                                }
                                placeholder=""
                                InputLabelProps={
                                    {shrink: true}
                                }
                                helperText={errors.ingreso && touched.ingreso && (
                                    <div className="input-feedback">{errors.ingreso}</div>
                                  )}
                                margin="normal"/>
                        </div>
                        </div>
                        </Paper>
        </Grid>
        <Grid item xs={0} sm={2}></Grid>
        </Grid>
        </div>                                               
                        </div>
            
            <Grid container spacing={3}>  
                        <Grid item xs={0} sm={2}></Grid>
                        <Grid item xs={12} sm={8}>
                        <div className="botondiv">
            <button
              type="button"
              className="reset"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Limpiar
            </button>
            <button  className="submit" type="submit" disabled={isSubmitting}>
              Siguiente
            </button>
            </div>
                        </Grid>
                        <Grid item xs={0} sm={2}></Grid>
                        </Grid>
          </form>
        );
      }}
    </Formik>
  </div>
  </>
);
    }

export default DatosEnvio;
