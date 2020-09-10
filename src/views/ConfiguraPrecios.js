import React, {useState, Fragment, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import ButtonConIcon from '../components/elements/ButtonConIcon'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    useHistory
} from "react-router-dom";
import Menu from '../components/Menu'

const useStyles = makeStyles(theme => ({
    root: {
        width: 300
    },
    margin: {
        height: theme.spacing(3)
    }
}));

const marks = [
    {
        value: 0,
        label: '0%'
    }, {
        value: 100,
        label: '100%'
    },
];

function valueLabelFormat(value) {
    return marks.findIndex(mark => mark.value === value) + 1;
}

export default function DiscreteSlider() {
    const [Credito, setCredito] = useState(0)
    const [Contado, setContado] = useState(0)
    const [Amigos, setAmigos] = useState(0)
    let {clavecliente} = useParams();
    const opcionesmenu = <Fragment>
        <div>
            <Link to={
                `/pedidos/${clavecliente}`
            }>Pedidos</Link>
        </div>
    </Fragment>
    const classes = useStyles();


    function valuetextcredito(value) {
        setCredito(value);
        return `${value}%`;
    }
    function valuetextcontado(value) {
        setContado(value);
        return `${value}%`;
    }
    function valuetextamigos(value) {
        setAmigos(value);
        return `${value}%`;
    }
    const configurarPrecio = async () => {
        let porcentajePrecio = {
            credito: Credito,
            contado: Contado,
            amigos: Amigos,
            clavecliente: clavecliente
        }
        var url = 'http://35.223.184.195:3007/configuraprecio';
        let datosbusqueda = await fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(porcentajePrecio),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).catch(error => console.error('Error:', error)).then(response => {
            return response;
        });
        alert(datosbusqueda)
        // setDatos(datosbusqueda);
        // alert(datosbusqueda)
        // setModal(true);
        // history.push(`/home/${clavecliente}/${invitado}`)
    }

    const consultaprecios = async () => {
        let porcentajePrecio = {
            clavecliente: clavecliente
        }
        var url = 'http://35.223.184.195:3007/consultaprecios';
        let datosbusqueda = await fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(porcentajePrecio),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).catch(error => console.error('Error:', error)).then(response => {
            return response;
        });
        debugger
        let dataJSON = JSON.parse(datosbusqueda);
        if (dataJSON.status === 200) {            
            setCredito(dataJSON.data.preciocredito);
            setContado(dataJSON.data.preciocontado);
            setAmigos(dataJSON.data.precioamigos);
            console.log(Credito,"*",Contado,"*",Amigos);
        }
    }

    useEffect(() => {
        consultaprecios();
    },[])


    return (
        <>
            <Menu opcionesmenu={opcionesmenu}/>
            <div className={
                classes.root
            }>
                <div className={
                    classes.margin
                }/>
                <Typography id="discrete-slider-always" gutterBottom>
                    Precios
                </Typography>
                <Slider defaultValue={Credito}
                    getAriaValueText={valuetextcredito}
                    aria-labelledby="discrete-slider-always"
                    step={10}
                    marks={marks}
                    valueLabelDisplay="on"/>
                <div className={
                    classes.margin
                }/> {/* <Typography id="discrete-slider-always" gutterBottom>
                Precio de contado
      </Typography>
            <Slider
                defaultValue={80}
                getAriaValueText={valuetextcontado}
                aria-labelledby="discrete-slider-always"
                step={10}
                marks={marks}
                valueLabelDisplay="on"
            />
            <div className={classes.margin} />
            <Typography id="discrete-slider-always" gutterBottom>
                Precio amigos
      </Typography>
            <Slider
                defaultValue={80}
                getAriaValueText={valuetextamigos}
                aria-labelledby="discrete-slider-always"
                step={10}
                marks={marks}
                valueLabelDisplay="on"
            /> */}
                <ButtonConIcon texto="Enviar ajuste de precios"
                    handleButton={configurarPrecio}/>
            </div>
        </>
    );
}
