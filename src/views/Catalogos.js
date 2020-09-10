import React, { useEffect, useState, Fragment } from 'react';
import ModalGenerico from '../components/elements/ModalGenerico'
import {
    Link,
    useParams,
    useHistory
} from "react-router-dom";
// import '../components/CSS/home.css'
import '../components/CSS/Catalogos.css'
import Menu from '../components/Menu'
import Chips from '../components/Chips'

import Child from '../HOCS/child';
import withDataFetching from '../HOCS/widthDataFetching'
import PruebaLoading from '../HOCS/PruebaLoading'

function Uploads({data}) {
    const [datos, setDatos] = useState([]);
    const [texto, setTexto] = useState();
    // const [opciones, setOpciones] = useState(<Link to="/invitado">Ingresar como invitado</Link>)
    const [modal, setModal] = useState(false);
    const [IdCatalogo, setIdCatalogo] = useState()
    let { clavecliente, invitado, idcatalogo } = useParams();
    const opcionesmenu = <Fragment>
        {clavecliente > 0 ? <div><Link to={`/carrito/${idcatalogo}/${clavecliente}/${invitado}`}>Mi carrito</Link></div> :
            <>
                <div><Link to={`/login`}>Soy invitado</Link></div>
                <div><Link to={`/registro`}>Soy cliente</Link></div>
            </>
        }
    </Fragment>
    let history = useHistory();


    useEffect(() => {
        catalogoInicial();
    }, [])


    const catalogoInicial = async () => {
        var url = 'http://35.223.184.195:3007/buscarcatalogos';
        var data = { clavecliente, invitado };
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
        setDatos(datosbusqueda.catalogos);
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

    const muestraCatalogo = (parametro) => {
        setModal(true);
        setIdCatalogo(parametro);
    }

    const ayuda = () => {
        history.push(`/ayuda`)
    }

    const irlogin = () => {
        history.push(`/invitado/${IdCatalogo}`)
    }

    const handleClose = () => {
        setModal(false);
    }

    return (
        <Fragment>
                    <div className="flex-container">                  
                        {/* <div> <Chips color="" label="Si eres vendedor registrate en el menu lateral" /></div> */}
                        {/* <div onClick={ayuda}> <Chips color="" label="¿Necesitas ayuda?" /></div> */}
                    </div>
                    <div className="catalogos">
                        {datos.map((row) => {
                            if (row.fotos !== undefined) {
                                let imagen = row.fotos;
                                let primerFoto = imagen.split('&');
                                let foto = primerFoto[1];
                                return <div className="item" onClick={() => muestraCatalogo(row.idcatalogo)}><img src={`http://35.223.184.195:3007/static/${foto}`} /></div>
                                // return <div className="item" onClick={() => muestraCatalogo(row.idcatalogo)}><img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8-k5A8sJY4vczmsxnyyHk47DeGrvXNa5i_inEOBevkKJapZpM`} /></div>                                
                            }
                        })}
                    </div>
                    <ModalGenerico handleAceptar={irlogin} handleClose={handleClose} status={modal} ventana={'catalogos'} title={"Mensaje"} contenido={"Para brindarte un mejor servicio debes ingresar como invitado"} />                    
                    <Child />
                    <PruebaLoading />
                    {/* <ul>
                    {data.map(post =>  <li key={post.id}>{post.title}</li> )}
                    </ul> */}

        </Fragment>
    );
}  
  
  export default withDataFetching('https://jsonplaceholder.typicode.com/posts', Uploads)
  