import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {
    Link
} from "react-router-dom";
const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function CustomizedDialogs({ contenido, title, ventana, status, handleClose, handleAceptar }) {
    const [open, setOpen] = React.useState(status);

    useEffect(() => {
        setOpen(status)
    }, [status]);

    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {title}
                </DialogTitle>
                <DialogContent dividers>
                    {contenido}
                </DialogContent>
                {ventana === 'negocios' &&
                    <DialogContent dividers>
                        <p align="justify"><Link to="/invitado">Accede desde este link para ingresar como invitado y que puedas realizar pedidos.</Link>{``}</p>
                    </DialogContent>
                }
                <DialogActions>
                    <Button autoFocus onClick={handleAceptar} color="primary">
                        Aceptar
          </Button>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Cancelar
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
