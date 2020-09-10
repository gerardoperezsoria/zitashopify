import React, { useEffect, useState, Fragment } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
// import SnackBar from '../components/SnackBar'
// import ModalGenerico from '../components/elements/ModalGenerico'
// import Stepper from '../components/elements/Stepper'
import {
  Link,
  useParams
} from "react-router-dom";
import Input from '../components/elements/Input'
import IconButton from '../components/elements/IconButton'
import Container from '../components/Container'
import '../components/CSS/home.css'


export default function Uploads() {
  const [datos, setDatos] = useState();
  const [texto, setTexto] = useState();
  const [opciones, setOpciones] = useState(<Link to="/invitado">Ingresar como invitado</Link>)
  const [modal, setModal] = useState(false)
  let { cliente, invitado } = useParams();
  const initialC = async () => {
    let res = await fetch('http://35.223.184.195:3007/negocios', {
      method: 'POST',
      'Content-Type': 'multipart/form-data',
    })
      .then(res => res.json()).then(data => {
        return data;
      })
    setDatos(res);

  }

  useEffect(() => {
    catalogoInicial();
  }, [])


  const catalogoInicial = async () => {
    var url = 'http://35.223.184.195:3007/productos';
    var data = { cliente, invitado };
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

  const evento = async () => {

    var url = 'http://35.223.184.195:3007/buscar';
    var data = { palabra: texto };

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

  const eventoText = (palabra) => {
    setTexto(palabra)
  }

  return (
    <Fragment>
      <div className="fondoFull">
        <div className="divHijo">
          <div>
            {/* <SnackBar /> */}
            {opciones}
          </div>
          <div className="buscador">
            <div className="campo"><Input eventoText={eventoText} /></div><div className="boton"><Tooltip title="Presione para buscar" placement="left"><IconButton evento={evento} /></Tooltip></div>
          </div>
          <br />
          <div className="tarjetas">
            <Container dataCard={datos} invitado={invitado} clavecliente={cliente}/>
          </div>
          {/* <ModalGenerico status={modal} ventana={'home'} title={"Datos necesarios para navegar en el sitio."} contenido={<Stepper pasos={['Busca', 'Decide', 'Llama y solicita tu pedido.']} />} /> */}
        </div>
      </div >
    </Fragment>
  );
}

