import React, {useEffect, useState, Fragment} from 'react';
import Tooltip from '@material-ui/core/Tooltip';
// import { makeStyles } from '@material-ui/core/styles';
import SnackBar from '../components/SnackBar'
import ModalGenerico from '../components/elements/ModalGenerico'
import Stepper from '../components/elements/Stepper'
import TextField from '@material-ui/core/TextField';
import Input from '../components/elements/Input'
import IconButton from '../components/elements/IconButton'
import Container from '../components/Container'
import {makeStyles} from '@material-ui/core/styles';
import ButtonConIcon from '../components/elements/ButtonConIcon'
import Menu from '../components/Menu'
import ButtonPay from '../components/ButtonPay'
import Steppercompra from '../HOCS/Stepper';

// import '../CSS/pago.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    useHistory
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200
    },
    dense: {
        marginTop: 19
    },
    menu: {
        width: 200
    }
}));


export default function Uploads() {
    let {                     
        laboral,
        edad,
        ingreso,                   
        idProducto,
        descripcion,
        total,
        email,
        telefono,
        nombre,
        apepat,
        apemat
    } = useParams();

    const opcionesmenu = <Fragment>
        <div>
            <Link to={
                `/porcatalogo`
            }>Atras</Link>
        </div>
    </Fragment>

return (
        <Fragment>
            <Menu opcionesmenu={opcionesmenu}/>
            <Steppercompra />
<div className="div--principal">

        <div className="botondiv">
        <ButtonPay 
                        id={idProducto}
                        descripcion={descripcion}
                        total={total}
                        email={email}
                        telefono={telefono}
                        nombre={nombre}
                        apepat={apepat}
                        apemat={apemat}
                        />                   
        </div>
    </div>
        </Fragment>
    );
}
