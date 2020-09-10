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
import '../components/CSS/detalleventa.css'
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
    const classes = useStyles();
    const [datos, setDatos] = useState();
    const [articulos, setArticulo] = useState();
    const [modal, setModal] = useState(false);
    let history = useHistory();
    let {
        id,
        idproducto,
        precio,
        clavecliente,
        invitado,
        foto,
        idcatalogo
    } = useParams();
    const [total, setTotal] = useState(precio);
    const [formulario, setFormulario] = useState({
        cantidad: 1,
        talla: "",
        telefono: "",
        email: "",
        calle: "",
        numext: "",
        numint: "",
        cp: "",
        fechaentrega: "",
        idseguimiento: "",
        nombre: "",
        apepat: "",
        apemat: "",
        costoentrega: ""
    });
    const opcionesmenu = <Fragment>
        <div>
            <Link to={
                `/porcatalogo/${idcatalogo}/${clavecliente}/${invitado}`
            }>Atras</Link>
        </div>
    </Fragment>

    const handleChange = prop => event => {
        if (prop === "cantidad") {
            let valor = event.target.value;
            let precioTotal = precio * valor;
            setTotal(precioTotal);
        }
        setFormulario({
            ...formulario,
            [prop]: event.target.value
        });
    };

    const agregarArticulo = async (data) => {
        var url = 'http://35.223.184.195:3007/carrito';
        let datosbusqueda = await fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).catch(error => console.error('Error:', error)).then(response => {
            return response;
        });

        let datos = JSON.parse(datosbusqueda);
        if (datos.status === 200) {
            history.push(`/porcatalogo/${idcatalogo}/${clavecliente}/${invitado}`)
        } else {
            alert("Error")
        }
    }

    const addCarrito = () => {
        if (formulario.cantidad > 0) {
            if ((clavecliente !== 0) && (invitado !== 0)) {
                var data = {
                    id,
                    idproducto,
                    cantidad: formulario.cantidad,
                    clavecliente,
                    invitado,
                    foto,
                    talla: formulario.talla
                };
                agregarArticulo(data)
            } else { // alert('Tienes que ingresar como invitado para poder hacer pedidos.')
                setModal(true);
            }
        } else {
            alert('Debes indicar el numero de articulos para agregarlos al carrito.')
        }
    }

    const handleClose = () => {
        setModal(false);
    };

    return (
        <Fragment>
            <Menu opcionesmenu={opcionesmenu}/>
            <div className="contenidodetalle">
                <div className="precio">
                    {
                    `Precio unitario: $${precio}`
                }</div>
                <div className="total">
                    {
                    `Total: $${total}`
                }</div>
                {
                idcatalogo === "528f" && <Fragment>
                    <form className={
                            classes.container
                        }
                        noValidate
                        autoComplete="off">
                        <div className="cantidad">
                            <TextField required id="standard-number" label="Selecciona la cantidad"
                                value={
                                    formulario.cantidad
                                }
                                onChange={
                                    handleChange('cantidad')
                                }
                                type="number"
                                className={
                                    classes.textField
                                }
                                InputLabelProps={
                                    {shrink: true}
                                }
                                margin="normal"/>
                        </div>
                        <br/>
                        <div className="talla">
                            <TextField required id="standard-number" label="Talla"
                                value={
                                    formulario.talla
                                }
                                onChange={
                                    handleChange('talla')
                                }
                                type="text"
                                className={
                                    classes.textField
                                }
                                placeholder="Anota detalles de tu pedido."
                                InputLabelProps={
                                    {shrink: true}
                                }
                                margin="normal"/>
                        </div>
                        <br/>
                        <div className="telefono">
                            <TextField required id="standard-number" label="telefono"
                                value={
                                    formulario.telefono
                                }
                                onChange={
                                    handleChange('telefono')
                                }
                                type="text"
                                className={
                                    classes.textField
                                }
                                placeholder="Anota detalles de tu pedido."
                                InputLabelProps={
                                    {shrink: true}
                                }
                                margin="normal"/>
                        </div>
                        <br/>
                        <div className="email">
                            <TextField required id="standard-number" label="email"
                                value={
                                    formulario.email
                                }
                                onChange={
                                    handleChange('email')
                                }
                                type="text"
                                className={
                                    classes.textField
                                }
                                placeholder="Anota detalles de tu pedido."
                                InputLabelProps={
                                    {shrink: true}
                                }
                                margin="normal"/>
                        </div>
                        <br/>
                        <div className="email">
                            <TextField required id="standard-number" label="email"
                                value={
                                    formulario.email
                                }
                                onChange={
                                    handleChange('email')
                                }
                                type="text"
                                className={
                                    classes.textField
                                }
                                placeholder="Anota detalles de tu pedido."
                                InputLabelProps={
                                    {shrink: true}
                                }
                                margin="normal"/>
                        </div>
                        <br/>
                        <div className="calle">
                            <TextField required id="standard-number" label="calle"
                                value={
                                    formulario.calle
                                }
                                onChange={
                                    handleChange('calle')
                                }
                                type="text"
                                className={
                                    classes.textField
                                }
                                placeholder="Anota detalles de tu pedido."
                                InputLabelProps={
                                    {shrink: true}
                                }
                                margin="normal"/>
                        </div>
                        <div className="numext">
                            <TextField required id="standard-number" label="numext"
                                value={
                                    formulario.numext
                                }
                                onChange={
                                    handleChange('numext')
                                }
                                type="text"
                                className={
                                    classes.textField
                                }
                                placeholder="Anota detalles de tu pedido."
                                InputLabelProps={
                                    {shrink: true}
                                }
                                margin="normal"/>
                        </div>
                        <div className="numint">
                            <TextField required id="standard-number" label="numint"
                                value={
                                    formulario.numint
                                }
                                onChange={
                                    handleChange('numint')
                                }
                                type="text"
                                className={
                                    classes.textField
                                }
                                placeholder="Anota detalles de tu pedido."
                                InputLabelProps={
                                    {shrink: true}
                                }
                                margin="normal"/>
                        </div>

                        <div className="cp">
                            <TextField required id="standard-number" label="cp"
                                value={
                                    formulario.cp
                                }
                                onChange={
                                    handleChange('cp')
                                }
                                type="text"
                                className={
                                    classes.textField
                                }
                                placeholder="Anota detalles de tu pedido."
                                InputLabelProps={
                                    {shrink: true}
                                }
                                margin="normal"/>
                        </div>

                        <div className="fechaentrega">
                            <TextField required id="standard-number" label="fechaentrega"
                                value={
                                    formulario.fechaentrega
                                }
                                onChange={
                                    handleChange('fechaentrega')
                                }
                                type="text"
                                className={
                                    classes.textField
                                }
                                placeholder="Anota detalles de tu pedido."
                                InputLabelProps={
                                    {shrink: true}
                                }
                                margin="normal"/>
                        </div>

                        <div className="idseguimiento">
                            <TextField required id="standard-number" label="idseguimiento"
                                value={
                                    formulario.idseguimiento
                                }
                                onChange={
                                    handleChange('idseguimiento')
                                }
                                type="text"
                                className={
                                    classes.textField
                                }
                                placeholder="Anota detalles de tu pedido."
                                InputLabelProps={
                                    {shrink: true}
                                }
                                margin="normal"/>
                        </div>

                        <div className="nombre">
                            <TextField required id="standard-number" label="nombre"
                                value={
                                    formulario.nombre
                                }
                                onChange={
                                    handleChange('nombre')
                                }
                                type="text"
                                className={
                                    classes.textField
                                }
                                placeholder="Anota detalles de tu pedido."
                                InputLabelProps={
                                    {shrink: true}
                                }
                                margin="normal"/>
                        </div>
                        <div className="apepat">
                            <TextField required id="standard-number" label="apepat"
                                value={
                                    formulario.apepat
                                }
                                onChange={
                                    handleChange('apepat')
                                }
                                type="text"
                                className={
                                    classes.textField
                                }
                                placeholder="Anota detalles de tu pedido."
                                InputLabelProps={
                                    {shrink: true}
                                }
                                margin="normal"/>
                        </div>
                        <div className="apemat">
                            <TextField required id="standard-number" label="apemat"
                                value={
                                    formulario.apemat
                                }
                                onChange={
                                    handleChange('apemat')
                                }
                                type="text"
                                className={
                                    classes.textField
                                }
                                placeholder="Anota detalles de tu pedido."
                                InputLabelProps={
                                    {shrink: true}
                                }
                                margin="normal"/>
                        </div>
                        <div className="costoentrega">
                            <TextField required id="standard-number" label="costoentrega"
                                value={
                                    formulario.costoentrega
                                }
                                onChange={
                                    handleChange('costoentrega')
                                }
                                type="text"
                                className={
                                    classes.textField
                                }
                                placeholder="Anota detalles de tu pedido."
                                InputLabelProps={
                                    {shrink: true}
                                }
                                margin="normal"/>
                        </div>
                    </form>
                </Fragment>
            }
                {
                idcatalogo !== "528f" && <Fragment>
                    <form className={
                            classes.container
                        }
                        noValidate
                        autoComplete="off">
                        <div className="cantidad">
                            <TextField required id="standard-number" label="Selecciona la cantidad"
                                value={
                                    formulario.cantidad
                                }
                                onChange={
                                    handleChange('cantidad')
                                }
                                type="number"
                                className={
                                    classes.textField
                                }
                                InputLabelProps={
                                    {shrink: true}
                                }
                                margin="normal"/>
                        </div>
                        <br/>
                        <div className="talla">
                            <TextField required id="standard-number" label="Talla"
                                value={
                                    formulario.talla
                                }
                                onChange={
                                    handleChange('talla')
                                }
                                type="text"
                                className={
                                    classes.textField
                                }
                                placeholder="Anota detalles de tu pedido."
                                InputLabelProps={
                                    {shrink: true}
                                }
                                margin="normal"/>
                        </div>
                    </form>
                </Fragment>
            }
                <div className="imagendetalle"><img src={`http://35.223.184.195:3007/static/${foto}`}/></div>
                {
                idcatalogo !== "528f" && <div className="buttondetalle"><ButtonConIcon texto="Agregar al carrito"
                        handleButton={addCarrito}/></div>
            }
                {
                idcatalogo === "528f" && <ButtonPay total={total}
                    cantidad={
                        formulario.cantidad
                    }
                    descripcion={
                        formulario.talla
                    }
                    clavecliente={clavecliente}
                    invitado={invitado}
                    idproducto={idproducto}/>
            } </div>
            <ModalGenerico handleClose={handleClose}
                status={modal}
                ventana={'negocios'}
                title={"Datos necesarios para navegar en el sitio."}
                contenido={
                    <div>Para realizar pedidos es necesario que ingreses el id que te proporciono el cliente y tu numero de telefono como referencia para identificarte como invitado.</div>
                }/>
        </Fragment>
    );
}
