import React, { useEffect, useState, Fragment } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
//import { makeStyles } from '@material-ui/core/styles';
import SnackBar from '../components/SnackBar'
import ModalGenerico from '../components/elements/ModalGenerico'
import Stepper from '../components/elements/Stepper'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory
} from "react-router-dom";
import Input from '../components/elements/Input'
import IconButton from '../components/elements/IconButton'
import Container from '../components/Container'
import Tabla from '../components/elements/Tabla'
import DataCarrito from '../components/DataCarrito'
import ButtonConIcon from '../components/elements/ButtonConIcon'
import Menu from '../components/Menu'
// import '../components/CSS/home.css'
// import src from '*.bmp';

/*
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  customWidth: {
    maxWidth: 100
  },
  noMaxWidth: {
    maxWidth: 'none',
  },
}));
*/


export default function Uploads() {
  const [datos, setDatos] = useState([{ id: 1, name: 9 }]);
  const [texto, setTexto] = useState();
  let history = useHistory();
  let { idcatalogo, clavecliente, invitado } = useParams();
  const opcionesmenu = <Fragment>
    <div><Link to={`/porcatalogo/${idcatalogo}/${clavecliente}/${invitado}`}>Atras</Link></div>
  </Fragment>
  const columns = ["Name", "Title", "Location", "Age", "Salary"];
  const initialC = async () => {
    var data = { clavecliente: clavecliente, invitado: invitado };
    let res = await fetch('http://35.223.184.195:3007/micarrito', {
      body: JSON.stringify(data), // data can be `string` or {object}!
      method: 'POST',
      'Content-Type': 'application/json'
    })
      .then(res => res.json()).then(data => {

        return data;
      })
    setDatos(res);

  }

  const addCarrito = () => {

  }

  useEffect(() => {
    carrito()
  }, []);

  const carrito = async () => {
    var url = 'http://35.223.184.195:3007/micarrito';
    var data = { clavecliente: clavecliente, invitado: invitado };
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
    setDatos(datosbusqueda);
  }

  const eliminarArticulo = async (parametro) => {
    var url = 'http://35.223.184.195:3007/eliminararticulo';
    var data = { clavecliente: clavecliente, invitado: invitado, id: parametro };
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
      let dataJSON = JSON.parse(datosbusqueda);
      if(dataJSON.status === 200){
        window.history.back();
      }else{
        alert('Error al eliminar el articulo intentalo mas tarde.')
      }    
  }

  const pedido = async () => {
    var url = 'http://35.223.184.195:3007/pedido';
    var data = { clavecliente: clavecliente, invitado: invitado };
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
    // setDatos(datosbusqueda);
    let valores = JSON.parse(datosbusqueda);
    if (valores.status === 200) {
      history.push(`/porcatalogo/${idcatalogo}/${clavecliente}/${invitado}`)
    }
  }


  const eliminar = (parametro) => {
    eliminarArticulo(parametro);
  }

  return (
    <Fragment>
      <Menu opcionesmenu={opcionesmenu} />
      <div className="fondoFull">
        <div className="divHijo">
          <div>
            {datos.length > 0 ? <ButtonConIcon texto="Hacer pedido" handleButton={() => pedido()} /> : <h6>El carrito no tiene articulos.</h6>}
          </div>
          <div className="carritoarticulos">
            {datos.map((row) => {
              return (
                <div className="carrito">
                  <div className="foto">< img src={`http://35.223.184.195:3007/static/${row.foto}`} width="100px" /></div>
                  <div className="total">{row.precio}</div>
                  <div className="cantidad">{row.cantidad}</div>
                  <div className="cantidad">{row.descripcion}</div>
                  <div className="botones"><ButtonConIcon texto="Eliminar" handleButton={() => eliminar(row.id)} /></div>
                  {/* <input type="button" onClick={()=>eliminar(row.id)}/> */}
                </div>
              )
            })
            }
          </div>
        </div>
      </div >


    </Fragment>
  );
}

