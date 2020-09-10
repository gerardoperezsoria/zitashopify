import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
//import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
//import PlayArrowIcon from '@material-ui/icons/PlayArrow';
//import SkipNextIcon from '@material-ui/icons/SkipNext';
//import SimpleTooltips from '../components/elements/Tooltip'
import Button from '@material-ui/core/Button';
import SwitchButton from '../components/elements/Switch'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './CSS/CardsEdicion.css'
const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 300,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard({ status, idcatalogo, idproducto, id, clavecliente, foto, precio, invitado }) {
  const classes = useStyles();
  const [Dato, setDato] = useState({
    idproducto: idproducto,
    precio: precio
  })

  const [StatusS, setStatusS] = useState(status)

  const handleChange = prop => event => {
    setDato({ ...Dato, [prop]: event.target.value });
    // handleformulario({ ...formulario, [prop]: event.target.value })
  };

  const actualizarPrecio = async (id) => {
    var url = 'http://35.223.184.195:3007/actualizarPrecio';
    var data = { precio: Dato.precio, idproducto: Dato.idproducto, id: id };
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
    let valores = JSON.parse(datosbusqueda);
    if (valores.status === 200) {
      // history.push(`/porcatalogo/${idcatalogo}/${clavecliente}/${invitado}`)
      alert("Modificacion exitosa");
    } else {
      alert("Modificacion erronea verifique la información");
    }
  }

  const actualizarProducto = async (id) => {
    var url = 'http://35.223.184.195:3007/actualizarProducto';
    var data = { precio: Dato.precio, idproducto: Dato.idproducto, id: id };
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
    let valores = JSON.parse(datosbusqueda);
    if (valores.status === 200) {
      // history.push(`/porcatalogo/${idcatalogo}/${clavecliente}/${invitado}`)
      alert("Modificacion exitosa");
    } else {
      alert("Modificacion erronea verifique la información");
    }
  }


  const modificarPrecio = prop => event => {
    actualizarPrecio(event)
  };

  const modificarProducto = prop => event => {
    actualizarProducto(event)
  };

  const cambiostatus = async (id, statusParametro) => {
    var url = 'http://35.223.184.195:3007/cambioEstatusProducto';
    var data = { id: id, valorstatus: statusParametro };
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
    let dataWS = JSON.parse(datosbusqueda);
    if (dataWS.status !== 200) {
      // setStatusS(dataWS.status);
      alert("Error al modificar el status del producto!")
    }
  }

  const handleSwitch = (id, event) => {
    let valorstatus = event.target.checked;
    let statusParametro = 0;
    if (valorstatus === true) {
      statusParametro = 1;
    }
    if (valorstatus === false) {
      statusParametro = 0;
    }
    cambiostatus(id, statusParametro)
  };

  return (
    <Fragment>
      <div className="cardDivEdition">
        <div className="switch"><SwitchButton status={StatusS} id={id} handleSwitch={handleSwitch} /></div>
        <div className="id"><label>{id}</label></div>
        <div className="cardImagen"><img src={`http://35.223.184.195:3007/static/${foto}`} /></div>
        <div className="campoIdProducto">
          <span>Id Producto</span><input onChange={handleChange('idproducto')} id="idproducto" type="text" value={`${Dato.idproducto}`} />
        </div>
        <div className="campoIdPrecio">
          <span>Precio</span><input onChange={handleChange('precio')} id="precio" type="text" value={`${Dato.precio}`} />
        </div>
        <div className="buttonPrecio">
          <Button onClick={() => { modificarPrecio('guardar')(`${id}`) }} id={`${id}`}>Modificar precio</Button>
        </div>
        <div className="buttonProducto">
          <Button onClick={() => { modificarProducto('guardar')(`${id}`) }} id={`${id}`}>Modificar idproducto</Button>
        </div>
      </div>
    </Fragment>
  );
}

// export default withDataFetching(, App)