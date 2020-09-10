import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons({ id,descripcion,total,email,telefono,nombre,apepat,apemat}) {
  const classes = useStyles();  
  return (
    <div className={classes.root}>                              
        <form action={`http://localhost:3005/create?id=${id}&descripcion=${descripcion}&total=${total}&email=${email}&telefono=${telefono}&nombre=${nombre}&apepat=${apepat}&apemat=${apemat}`} method="post">          
        {/* <form action={`http://35.223.184.195:3005/create?idcatalogo=${idcatalogo}&clavecliente=${clavecliente}&invitado=${invitado}&cantidad=${cantidad}&descripcion=${descripcion}&idproducto=${idproducto}&total=${total}&email=${email}&telefono=${telefono}&calle=${calle}&numext=${numext}&numint=${numint}&cp=${cp}&nombre=${nombre}&apepat=${apepat}&apemat=${apemat}`} method="post">           */}
          <button className="submit" type="submit" variant="contained" color="primary">
            Pagar con Paypal
          </button>
        </form>
      </div>
  );
}