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
        flexWrap: 'wrap'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200
    },
    dense: {
        marginTop: 19
    },
    menu: {
        width: 200
    }
}));

function DatosEnvio(){
    const classes = useStyles();
    let history = useHistory();
    let {
      idcatalogo,
      clavecliente,
      invitado,
      cantidad,
      descripcion,
      idproducto,
      total,
      imagen
  } = useParams();
    return (
      <>
      <Steppercompra />
  <div className="app">
    <h3>
      Datos de envio
    </h3>

    <Formik
      initialValues={{ email: "",telefono: "",calle: "",numext: "",numint: "",cp: "",nombre: "",apepat: "",apemat: "" }}
      onSubmit={async values => {
        history.push(`/pago/${idcatalogo}/${clavecliente}/${invitado}/${cantidad}/${descripcion}/${idproducto}/${total}/${values.email}/${values.telefono}/${values.calle}/${values.numext}/${values.numint}/${values.cp}/${values.nombre}/${values.apepat}/${values.apemat}/${imagen}`)
      }}
      validationSchema={Yup.object().shape({
          telefono: Yup.number()
        //   .max(10, 'Solo 10 digitos!')
          .min(10, 'Solo 10 digitos!')
          .required('Required'),   

          email: Yup.string()
          .email()
          .required("Required"),
          
          calle: Yup.string()
          .max(200, 'Too Long!')
          .required('Required'),   
          
          numext: Yup.string()
          .max(200, 'Too Long!')
          .required('Required'),   
          
          numint: Yup.string()
          .max(200, 'Too Long!')
          .required('Required'),
          
          cp: Yup.number()
        //   .max(5, 'Too Long!')
            .min(5, 'Solo 10 digitos!')
          .required('Required'),   
          
          nombre: Yup.string()
          .max(200, 'Too Long!')
          .required('Required'),          
          
          apepat: Yup.string()
          .max(200, 'Too Long!')
          .required('Required'),
          
          apemat: Yup.string()
          .max(200, 'Too Long!')
          .required('Required'),                    
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
            <div className="datosenvio">
            <div className="formulario">
                            <TextField required id="email" label="email"
                                value={
                                    values.email
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
                                helperText={errors.email && touched.email && (
                                    <div className="input-feedback">{errors.email}</div>
                                  )}
                                margin="normal"/>
                                            
                        </div>
            <div className="formulario">
                            <TextField required id="telefono" label="telefono"
                                value={
                                    values.telefono
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
                                helperText={errors.telefono && touched.telefono && (
                                    <div className="input-feedback">{errors.telefono}</div>
                                  )}
                                margin="normal"/>
                                            
                        </div>                        
                        <div className="formulario">
                            <TextField required id="calle" label="calle"
                                value={
                                    values.calle
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
                                helperText={errors.calle && touched.calle && (
                                    <div className="input-feedback">{errors.calle}</div>
                                  )}
                                margin="normal"/>
                        </div>
                        <div className="formulario">
                            <TextField required id="numext" label="numext"
                                value={
                                    values.numext
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
                                helperText={errors.numext && touched.numext && (
                                    <div className="input-feedback">{errors.numext}</div>
                                  )}
                                margin="normal"/>
                        </div>
                        <div className="formulario">
                            <TextField required id="numint" label="numint"
                                value={
                                    values.numint
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
                                helperText={errors.numint && touched.numint && (
                                    <div className="input-feedback">{errors.numint}</div>
                                  )}
                                margin="normal"/>
                        </div>

                        <div className="formulario">
                            <TextField required id="cp" label="cp"
                                value={
                                    values.cp
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
                                helperText={errors.cp && touched.cp && (
                                    <div className="input-feedback">{errors.cp}</div>
                                  )}
                                margin="normal"/>
                        </div>

                        <div className="formulario">
                            <TextField required id="nombre" label="nombre"
                                value={
                                    values.nombre
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
                                helperText={errors.nombre && touched.nombre && (
                                    <div className="input-feedback">{errors.nombre}</div>
                                  )}
                                margin="normal"/>
                        </div>
                        <div className="formulario">
                            <TextField required id="apepat" label="apepat"
                                value={
                                    values.apepat
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
                                helperText={errors.apepat && touched.apepat && (
                                    <div className="input-feedback">{errors.apepat}</div>
                                  )}
                                margin="normal"/>
                        </div>
                        <div className="formulario">
                            <TextField required id="apemat" label="apemat"
                                value={
                                    values.apemat
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
                                helperText={errors.apemat && touched.apemat && (
                                    <div className="input-feedback">{errors.apemat}</div>
                                  )}
                                margin="normal"/>
                        </div>
            </div>
            <br/>
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
          </form>
        );
      }}
    </Formik>
  </div>
  </>
);
    }

export default DatosEnvio;
