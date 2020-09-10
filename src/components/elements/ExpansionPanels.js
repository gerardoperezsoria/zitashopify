import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BotonesConIcon from './BotonesConIcon'
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function SimpleExpansionPanel({ data, eliminarArticulo }) {
    const classes = useStyles();

    const confirmar = (valor) => {
        eliminarArticulo(valor)
    }

    return (
        <div className={classes.root}>
            {
                data.map((row, index) => {
                    return <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>{`No. Articulos: ${row.articulos} Total:$${row.total} cliente: ${row.cliente}`}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div classname="cardventas">
                                {row.detalle.map((dato) => {
                                    return <div classname="cardpedido">
                                        <span>cantidad: {dato.cantidad}</span>
                                        <span>precio: ${dato.precio}</span>
                                        <span>ID: {dato.idproducto}</span>
                                        <span></span>
                                        <BotonesConIcon confirmar={confirmar} id={dato.id} />
                                    </div>
                                })}
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                }
                )
            }

        </div>
    );
}
