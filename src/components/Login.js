import React, { Fragment, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

import DialogoGenerico from './elements/DialogoGenerico'
import BtnPassword from './elements/BtnPassword'
import BtnUsuario from './elements/BtnUsuario'
import Link from './elements/Links'
import { Drawer } from '@material-ui/core';
function PaperComponent(props) {
    return (
        <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
}

export default function DraggableDialog({ estadoDialogo, EventModal }) {
    const [open, setOpen] = React.useState(false);
    const contenido = <Fragment><BtnUsuario /><BtnPassword /></Fragment>
    const linksTag = <Fragment><a href="/registro">registro</a> <a href="/recuperapassword">RecuperaPassword</a></Fragment>
    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    // useEffect(() => {
    //     // setOpen(estadoDialogo)
    //     console.log("estadoDialogo I",estadoDialogo);
    // },[estadoDialogo, open])

    return (
        <div>
            {/* <DialogoGenerico EventModal={EventModal} contenido={contenido} estadoDialogo={estadoDialogo} links={linksTag} /> */}
            <Drawer estadoD={true} />
        </div>
    );
}
