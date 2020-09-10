import React,{Fragment} from 'react';
import ToggleMenu from '../components/elements/ToggleMenu'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    Redirect
  } from "react-router-dom";
import './CSS/Menu.css'
function Menu({opcionesmenu}) {
  return <Fragment>
  <div class="topnav" id="myTopnav">
    {opcionesmenu}
  {/* <div><Link to={`/home/b24a/0`}>Regresar</Link></div>
  <div><Link to={`/carrito/c35f/715`}>Mi carrito</Link></div>
  <div><ToggleMenu /></div>
  <div><Link to="/invitado">Ingresar como invitado</Link></div>  
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a> */}
</div>
</Fragment>
}
export default Menu;