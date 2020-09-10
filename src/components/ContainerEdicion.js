import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
//import Typography from '@material-ui/core/Typography';
//import Container from '@material-ui/core/Container';
import CardsEdicion from './CardsEdicion'
export default function SimpleContainer({ idcatalogo, dataCard, invitado, clavecliente }) {
  const [data, setData] = useState([])
  useEffect(() => {
    if (dataCard !== undefined) {
      setData(dataCard);
    }
  }, [dataCard]);

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Container maxWidth="sm"> */}
      <div className="div-container">
        {
          data.length > 0 ?
            data.map((row) => {
              let foto = "";
              let imagen = row.fotos;
              let primerFoto = "";
              if (imagen === undefined) {
                foto = "https://image.freepik.com/vector-gratis/dibujos-animados-envio-logistico-entrega_18591-56088.jpg";
              } else {
                if (imagen === null) {
                  foto = "https://image.freepik.com/vector-gratis/dibujos-animados-envio-logistico-entrega_18591-56088.jpg";
                } else {
                  primerFoto = imagen.split('&');
                  foto = primerFoto[1];
                  // foto = `http://35.223.184.195:3007/static/${foto}`
                }
              }
              let estatusProducto = false;
              if (row.status === "1") {
                estatusProducto = true;
              }
              if (row.status === "0") {
                estatusProducto = false;
              }
              // return <div className="cardUser"><Cards key={row.id} id={row.id} producto={row.producto} link={row.link} foto={foto} precio={row.precio} negocio={row.negocio} /><br/></div>
              return <div className="cardUser"><CardsEdicion status={estatusProducto} key={row.id} idcatalogo={idcatalogo} id={row.id} idproducto={row.idproducto} invitado={invitado} clavecliente={clavecliente} foto={foto} precio={row.precio} /><br /></div>
            })
            :
            <h6>Sin registros</h6>
        }
      </div>
      {/* </Container> */}
    </React.Fragment>
  );
}
