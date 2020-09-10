import React, { useEffect, useState, Fragment } from 'react';
import FormularioEP from '../components/FormularioEP';

import ContainerEdicion from '../components/ContainerEdicion'

import Button from '../components/elements/Button'
// import '../components/CSS/home.css'
import '../components/CSS/EdicioProductos.css'

export default function Uploads() {
    const [datos, setDatos] = useState([]);
    const [dataCatalogos, setCatalogos] = useState([{ label: 'Albania' }])

    const [formulario, setformulario] = useState({
        idProducto: "",
        idCatalogos: ""
    });
    const [dataClear] = useState("");




    const catalogos = async () => {
        var url = 'http://35.223.184.195:3007/buscarcatalogos';
        // var data = { palabra: texto };
        let datosbusqueda = await fetch(url, {
            method: 'POST', // or 'PUT'
            // body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                return response;
            }
            );
        setCatalogos(datosbusqueda.catalogos);
    }

    useEffect(() => {
        catalogos();
    }, [])

    const porcatalogo = async (id) => {
        var url = 'http://35.223.184.195:3007/porcatalogo';
        var data = { idcatalogo: id, clavecliente: "" };
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

    const handleformulario = (e) => {
        if (Object.keys(e)[0] === "idproducto") {
            setformulario({ ...formulario, "idproducto": e.idproducto });
        }
        if (Object.keys(e)[0] === "idcatalogo") {
            // setformulario({ ...formulario, "idcatalogo": e.idcatalogo });
            porcatalogo(e.idcatalogo);
        }
    }

    const handleBuscar = async () => {
        var url = 'http://35.223.184.195:3007/buscarproducto';
        var data = { idproducto: formulario.idproducto };
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
        let dataWS = JSON.parse(datosbusqueda);

        if (dataWS.status === 200) {
            setDatos(dataWS.data);
        } else {
            alert("Sin resultados");
        }
    }


    return (
        <Fragment>
            <div className="fondoFull">
                <div className="divHijo">
                    <FormularioEP suggestions={dataCatalogos} clear={dataClear} handleformulario={handleformulario} />
                    <div className="buttonbuscar">
                        <Button textoButton="Buscar" evento={handleBuscar} />
                    </div>
                    <br />
                    <div className="edicion">
                        <ContainerEdicion idcatalogo={""} dataCard={datos} invitado={""} clavecliente={""} />
                    </div>
                </div>
            </div >
        </Fragment>
    );
}

