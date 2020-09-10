import React, { useEffect, useState } from 'react';

import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';

import Cards from './Cards'

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

export default function SimpleContainer({ dataCard }) {
  const [data, setData] = useState([])
  useEffect(() => {
    if (dataCard !== undefined) {
      setData(dataCard);
    }
  }, [dataCard, data]);

  const classes = useStyles();

  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      {/* <Grid container
                spacing={3}> */}

      <div className="containercards">
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
                }
              }
              // return    
              //                                  <Grid item
              // xs={12}
              // sm={2}>
                return <Paper className={
                classes.paper
            }>
              {/* return  */}
              <Cards nombre={row.nombre} key={row.id} id={row.id} foto={foto} precioventa={row.precioventa} descripcion={row.descripcion} />
              </Paper>
            // </Grid>
            })
            :
            <h6>Sin registros</h6>
        }
      </div>
      {/* </Grid> */}
    </React.Fragment>
  );
}
