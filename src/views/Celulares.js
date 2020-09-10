import React, { useEffect, useState, Fragment } from 'react';
import Container from '../components/Container'

export default function Uploads() {
    const [datos, setDatos] = useState();

    useEffect(() => {
        window.onbeforeunload = function (e) {
            return 'Texto de aviso';
        };
        porcatalogo();
    }, [])

    const porcatalogo = async () => {
        // var url = 'http://35.223.184.195:3007/consultaproductos/3';
        var url = 'http://localhost:3007/celulares/1';
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
            <Container dataCard={datos} />
        </Fragment>
    );
}

