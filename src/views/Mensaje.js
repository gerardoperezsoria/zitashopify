import React, {useState, Fragment, useEffect} from 'react';
import Formulario from '../components/FormularioDocs';
import DropZone from '../components/DropZone'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';
import {makeStyles} from '@material-ui/core/styles';
import Button from '../components/elements/Button'
import Menu from '../components/Menu'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    Redirect,
    useHistory
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}));

export default function Uploads() {
    const [dataClear, setDataClear] = useState("");
    let history = useHistory();
    let {
        laboral,
        edad,
        ingreso,
        idProducto,
        descripcion,
        precioventa
    } = useParams();

    const handleSubmit = async () => {
        history.push(`/celulares/page`)
    }


    return (
        <Fragment>
            <Grid container
                spacing={3}>
                <Grid xs={2}
                    sm={2}></Grid>
                <Grid item
                    xs={8}
                    sm={8}>
                    <h3>Todo esta listo, verificaremos tu identidad y nos pondremos en contacto contigo.</h3>
                </Grid>
                <Grid xs={2} sm={2}></Grid>
                <Grid xs={2} sm={2}></Grid>
                <Grid  xs={8} sm={8}>
                    {/* <Button textoButton="Listo"
                        evento={handleSubmit}/> */}
                                    <div className="botondiv">
<button  className="submit" onClick={handleSubmit}>
              Listo
            </button>
            </div>
                        </Grid>                
                <Grid xs={2} sm={2}></Grid>
            </Grid>
        </Fragment>
    );
}
