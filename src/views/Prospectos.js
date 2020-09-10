import React, { useEffect, useState, Fragment } from 'react';

export default function Uploads() {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        window.onbeforeunload = function (e) {
            return 'Texto de aviso';
        };
        prospectos();
    }, [])

    const prospectos = async () => {
        debugger
        // var url = 'http://35.223.184.195:3007/consultaproductos/3';
        var url = 'http://localhost:3007/prospectos/1';
        // var data = { idcatalogo, clavecliente };
        let datosbusqueda = await fetch(url, {
            method: 'GET', // or 'PUT'
            // body: JSON.stringify(data), // data can be `string` or {object}!
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

    return (
        <Fragment>
            <div className="prospectos">
{
    datos.map((row)=>{
        let imagen = row.fotos.split('&')
        return <div className="prospecto">
            <div className="estatus">
            <span>{row.id}</span>
                   <span>{row.status}</span>
                </div>
            <div className="imagenes">
                <h4>Imagenes</h4>
            <img src={`http://localhost:3007/static/${imagen[0]}`} alt=""/>
            <img src={`http://localhost:3007/static/${imagen[1]}`} alt=""/>
            <img src={`http://localhost:3007/static/${imagen[2]}`} alt=""/>
            <img src={`http://localhost:3007/static/${imagen[3]}`} alt=""/>
            <img src={`http://localhost:3007/static/${imagen[4]}`} alt=""/>
            <img src={`http://localhost:3007/static/${imagen[5]}`} alt=""/>
            <img src={`http://localhost:3007/static/${imagen[6]}`} alt=""/>
            <img src={`http://localhost:3007/static/${imagen[7]}`} alt=""/>
            </div>
                   <div className="solicitante">
                   <h4>Solicitante</h4>
                   <span>Nombre: {row.nombres}</span><br/>
                   <span>Apellido Paterno: {row.apepats}</span><br/>
                   <span>Apellido Materno: {row.apemats}</span><br/>
                   <span>Correo: {row.correos}</span><br/>
                   <span>Contacto: {row.contactos}</span><br/>
                   <span>Situación laboral: {row.laboral}</span><br/>
                   <span>Edad: {row.edad}</span><br/>
                   <span>Ingreso: {row.ingreso}</span>
                   </div>
                   <div className="aval">
                   <h4>Aval</h4>
                   <span>Nombre: {row.nombrea}</span><br/>
                   <span>Apellido Paterno: {row.apepata}</span><br/>
                   <span>Apellido Materno: {row.apemata}</span><br/>
                   <span>Correo: {row.correoa}</span><br/>
                   <span>Contacto: {row.contactoa}</span>
                   </div>
        </div>    
    })
}
</div>
        </Fragment>
    );
}

