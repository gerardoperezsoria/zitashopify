import React, { Fragment, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect
} from "react-router-dom";

import Articulos from './views/Articulos'
import Home from './views/Home'
import Registro from './views/Registro'
import RecuperaPassword from './views/RecuperarPassword'
import Pedidos from './views/Pedidos'
import DetalleVenta from './views/DetalleVenta'
import Mapa from './views/Mapa'
import Invitado from './views/LoginInvitado'
import Carrito from './views/Carrito'
import ConfiguraPrecio from './views/ConfiguraPrecios'
import Catalogos from './views/Catalogos'
import PorCatalogo from './views/PorCatalogo'
import CrearCatalogos from './views/CrearCatalogos'
import Precios from './views/Precios'
import EditaArticulos from './views/EdicionProductos'
// import Parallax from './views/Parallax'
import SnackBar from './components/SnackBar'
import Chip from './components/elements/Chip'
// import Avatar from './components/elements/Avatar'
import Login from './views/Login'
import { IconButton } from "@material-ui/core";
import Menu from './components/Menu'
import Drawer from "./components/elements/Drawer";
import EdicionProductos from './views/EdicionProductos'
import Ayudas from './views/Ayuda';
import DatosEnvios from './views/DatosEnvio';
import Pagos from './views/Pago';
import MisCompras from './views/MisCompras';
import Celulares from './views/Celulares';
import Documentos from './views/Documentos';
import Mensaje from './views/Mensaje';
import Prospectos from './views/Prospectos';
import './components/CSS/celulares.css'

export default function App() {
  const [dialogo, setDialogo] = useState(false)
  const handleClickOpen = () => {
    setDialogo(true);
  }
  const saludar = nombre => `Hola ${nombre}`
  console.log(saludar);
  const EventModal = (event) => {
    setDialogo(event);
  }


  return (
    <Router>
      <div>
        <header class="main-header">
          <Drawer estadoD={false} />
        </header>
        <br/>
        <Redirect
          from="/"
          
          // to="/catalogos/0/0/0" />
          //to="/porcatalogo/86ae/d978/715" 
          to="/celulares/page"
          // to="/articulos"
          // to="/prospectos/page"
          // to="/mensaje"
          />
        <Switch>
        <Route path="/prospectos/:page">
            <Prospecto />
          </Route>
        <Route path="/documentos/:laboral/:edad/:ingreso/:precioventa/:descripcion/:idProducto">
            <Documento />
          </Route>
        <Route path="/celulares/:page">
            <Celular />
          </Route>          
          <Route path="/articulos">
            <Articulo />
          </Route>
          <Route path="/home/:cliente/:invitado">
            <Inicio />
          </Route>
          <Route path="/pedidos/:clavecliente">
            <Pedido />
          </Route>
          <Route path="/detalle/:id/:precioventa/:foto/:nombre/:descripcion">
            <Detalle />
          </Route>
          <Route path="/mapa">
            <Mapas />
          </Route>
          <Route path="/registro">
            <Registros />
          </Route>
          <Route path="/recuperapassword">
            <RecuperaPasswords />
          </Route>
          <Route path="/login">
            <Logins />
          </Route>
          <Route path="/invitado/:idcatalogo">
            <Invitados />
          </Route>
          <Route path="/carrito/:idcatalogo/:clavecliente/:invitado">
            <Carritos />
          </Route>
          <Route path="/ConfiguraPrecio/:clavecliente">
            <ConfiguraPrecios />
          </Route>
          <Route path="/catalogos/:idcatalogo/:clavecliente/:invitado">
            <Catalogo />
          </Route>
          <Route path="/porcatalogo/:idcatalogo/:clavecliente/:invitado">
            <PorCatalogo />
          </Route>
          <Route path="/crearcatalogos">
            <CrearCatalogo />
          </Route>
          <Route path="/precios">
            <Precio />
          </Route>

          <Route path="/editararticulos">
            <EditaArticulo />
            </Route>
          <Route path="/edicionproductos">
            <EdicionProducto />
          </Route>
          <Route path="/ayuda">
            <Ayuda />
          </Route>
          <Route path="/datosenvio/:id/:foto/:nombre/:precioventa/:descripcion">
            <DatosEnvio />
          </Route>                    
        {/* <Route path="/pago/:idcatalogo/:clavecliente/:invitado/:cantidad/:descripcion/:idproducto/:total/:email/:telefono/:calle/:numext/:numint/:cp/:nombre/:apepat/:apemat/:imagen"> */}
        <Route path="/pago/:laboral/:edad/:ingreso/:idProducto/:descripcion/:total/:email/:telefono/:nombre/:apepat/:apemat">        
            <Pago />
          </Route>
          <Route path="/miscompras/:idcatalogo/:clavecliente/:invitado">
            <MiCompra />
          </Route>
          <Route path="/mensaje">
            <Mensaje />
          </Route>                              
        </Switch>        
      </div>
    </Router >
  );
}

function Prospecto() {
  return <Prospectos />;
}

function Documento() {
  return <Documentos />;
}
function Celular() {
  return <Celulares />;
}
function MiCompra() {
  return <MisCompras />;
}
function Pago() {
  return <Pagos />;
}

function DatosEnvio() {
  return <DatosEnvios />;
}

function Ayuda() {
  return <Ayudas />;
}
function EditaArticulo() {
  return <EditaArticulos />;
}
function EdicionProducto() {
  return <EdicionProductos />;
}

function Precio() {
  return <Precios />;
}

function CrearCatalogo() {
  return <CrearCatalogos />;
}

function Catalogo() {
  return <Catalogos />;
}

function Carritos() {
  return <Carrito />;
}
function ConfiguraPrecios() {
  return <ConfiguraPrecio />;
}
function Invitados() {
  return <Invitado />;
}

function Logins() {
  return <Login />;
}
function Inicio() {
  return <Home />;
}

function Mapas() {
  return <Mapa />;
}

function Articulo() {
  return <Articulos />;
}

function Pedido() {
  return <Pedidos />;
}
function Detalle() {
  return <DetalleVenta />;
}
function Registros() {
  return <Registro />;
}
function RecuperaPasswords() {
  return <RecuperaPassword />;
}
function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}