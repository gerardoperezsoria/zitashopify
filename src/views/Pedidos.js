import React, { useEffect, useState, Fragment } from 'react';

//import { makeStyles } from '@material-ui/core/styles';


import {
  Link,
  useParams,
} from "react-router-dom";
import ExpansionPanels from '../components/elements/ExpansionPanels'
import Chips from '../components/Chips'
import Menu from '../components/Menu'
import '../components/CSS/Pedidos.css'
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
  const pedidos = [
    // { id: 0, articulos: 3, ganacia: 500, total: 200, telefono: "5566443322", detalle: [{ id: 1, precio: 23, cantidad: 56 }, { id: 1, precio: 23, cantidad: 56 }, { id: 1, precio: 23, cantidad: 56 }] },
    // { id: 0, articulos: 3, ganacia: 500, total: 200, telefono: "5566443322", detalle: [{ id: 1, precio: 23, cantidad: 56 }, { id: 1, precio: 23, cantidad: 56 }, { id: 1, precio: 23, cantidad: 56 }] },
    // { id: 0, articulos: 3, ganacia: 500, total: 200, telefono: "5566443322", detalle: [{ id: 1, precio: 23, cantidad: 56 }, { id: 1, precio: 23, cantidad: 56 }, { id: 1, precio: 23, cantidad: 56 }] }
  ]
  const [datos, setDatos] = useState(pedidos);

  let { clavecliente } = useParams();
  const opcionesmenu = <Fragment>
    <div><Link to={`/ConfiguraPrecio/${clavecliente}`}>Configura precios</Link></div>
  </Fragment>

  useEffect(() => {
    evento()
  })

  const evento = async () => {
    var url = 'http://35.223.184.195:3007/pedidos';
    var data = { clavecliente: clavecliente };
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

    let arrayPedidos = [];
    let datosWS = datosbusqueda.pedidos
    datosWS.map((row) => {
      let idp = row.idpedido;
      if ((arrayPedidos.indexOf(idp) === -1) || (arrayPedidos.length === 0)) {
        arrayPedidos.push(idp);
      }
      return true
    })
    let datosPedidos = [];
    for (let i = 0; i < arrayPedidos.length; i++) {
      let result = datosWS.filter(word => word.idpedido === arrayPedidos[i]);
      let gana = 0;
      let cant = 0;
      let tot = 0;
      for (let y = 0; y < result.length; y++) {
        gana = gana + parseInt(result[y].ganancia)
        cant = cant + parseInt(result[y].cantidad)
        tot = tot + parseInt(result[y].precio * result[y].cantidad)
      }
      let data = { idpedido: arrayPedidos[i], ganancia: gana, cliente: result[0].invitado, total: tot, articulos: cant, detalle: result }
      // { id: 0, articulos: 3, ganacia: 500, total: 200, telefono: "5566443322", detalle: [{ id: 1, precio: 23, cantidad: 56 }, { id: 1, precio: 23, cantidad: 56 }, { id: 1, precio: 23, cantidad: 56 }] },
      datosPedidos.push(data);
    }
    setDatos(datosPedidos);
  }

  const eliminardepedido = async (id) => {
    var url = 'http://35.223.184.195:3007/eliminardepedido';
    var data = { id: id, clavecliente: clavecliente };
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
    if (dataJSON.status === 200) {
      alert('Articulo eliminado del pedido.')
    }else{
      alert('Error al eliminar el articulo del pedido.')
    }
    // setDatos(datosbusqueda);
  }

  const eliminarArticulo = (id) => {
    alert(`Eliminar articulo: ${id}`)
    eliminardepedido(id)
  }





  return (
    <Fragment>
      <Menu opcionesmenu={opcionesmenu} />
      {/* <div className="fondoFull"> */}
        <div className="flex-container-pedidos">
        <div><Chips color="" label={`Si es tu primer vez configura el % que incrementaras a cada producto (Default 30%).`} /></div>
          <div><Chips color="" label={`Mi clave para compartir con mis clientes:`} /><h3>{clavecliente}</h3></div>
          
            <ExpansionPanels data={datos} eliminarArticulo={eliminarArticulo} />
          
        </div >
      {/* </div > */}
    </Fragment>
  );
}
