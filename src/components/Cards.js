import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Link
} from "react-router-dom";

export default function MediaControlCard({ id,foto,precioventa,descripcion, nombre }) {  

  return (
    <Fragment>
        <div className="cardContainer">          
            {/* <Link to={`/detalle/${idcatalogo}/${id}/${idproducto}/${precio}/${clavecliente}/${invitado}/${foto}`}> */}
            <Link to={`/detalle/${id}/${precioventa}/${foto}/${nombre}/${descripcion}`}>
            <img src={`http://localhost:3007/static/${foto}`} alt=""/>
            {/* <img src={`http://35.223.184.195:3007/static/${foto}`} /> */}
            </Link>
            <div className="nombre">
            <span>
              {`${nombre}`}
            </span>
          </div>

          <div className="precio">
            <span>
              Precio de crédito: {`$${precioventa}`}
            </span>
          </div>
        </div>
    </Fragment>
  );
}
