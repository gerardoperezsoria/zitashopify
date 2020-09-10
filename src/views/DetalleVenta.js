import React, {useEffect, useState, Fragment} from 'react';
import Tooltip from '@material-ui/core/Tooltip';
// import { makeStyles } from '@material-ui/core/styles';
import SnackBar from '../components/SnackBar'
import ModalGenerico from '../components/elements/ModalGenerico'

import TextField from '@material-ui/core/TextField';
import Input from '../components/elements/Input'
import IconButton from '../components/elements/IconButton'
import Container from '../components/Container'
import {makeStyles} from '@material-ui/core/styles';
import ButtonConIcon from '../components/elements/ButtonConIcon'
import Menu from '../components/Menu'
import ButtonPay from '../components/ButtonPay'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Steppercompra from '../HOCS/Stepper'
import { green } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SimpleTable from '../components/elements/SimpleTable'

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


export default function Uploads() {
    const matches = useMediaQuery('(min-width:600px)');
    const classes = useStyles();
    const [datos, setDatos] = useState();
    const [articulos, setArticulo] = useState();
    const [modal, setModal] = useState(false);
    let history = useHistory();
    let {
        id,foto,nombre,precioventa,descripcion
    } = useParams();
    // const imagen = `http://35.223.184.195:3007/static/${foto}`
    const imagen = `http://localhost:3007/static/${foto}`

    const nextpage = () => {
        history.push(`/datosenvio/${id}/${foto}/${nombre}/${precioventa}/${descripcion}`)        
    }

    return (        
        <Fragment>
            <Steppercompra paso={0}/>
            <br/>
                <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={0} sm={2}>
          
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}><img alt="" width="320px" src={`${imagen}`} /></Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
          <div className="contenedorDV">
            <div className="nombre">
                <h2>{`${nombre}`}</h2>
            </div>
            <div className="precio">
                {`${precioventa}`}
            </div>
            <div className="descripcion">
                {
                `${descripcion}`
            }</div>
            <br/>
            <div className="credito">
              <h3>Plan de pagos</h3>
                <SimpleTable precioventa={precioventa}/>
            </div>
            <div className="botondiv">
                {/* <ButtonConIcon texto="Continuar" className="submit"
                    handleButton={nextpage}/> */}

<button  className="submit" onClick={nextpage}>
              Siguiente
            </button>
            </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={0} sm={2}>
          
          </Grid>
      </Grid>
    </div>
        </Fragment>
    );
}
