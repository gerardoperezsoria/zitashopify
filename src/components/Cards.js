import React, { Fragment } from 'react';
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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

// import './CSS/Cards.css'
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

export default function MediaControlCard({ id,foto,precioventa,descripcion, nombre }) {  
  const classes = useStyles();

  //const theme = useTheme();

  return (
    <Fragment>
        <div className="cardContainer">          
            {/* <Link to={`/detalle/${idcatalogo}/${id}/${idproducto}/${precio}/${clavecliente}/${invitado}/${foto}`}> */}
            <Link to={`/detalle/${id}/${precioventa}/${foto}/${nombre}/${descripcion}`}>
            <img src={`http://localhost:3007/static/${foto}`} />
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
