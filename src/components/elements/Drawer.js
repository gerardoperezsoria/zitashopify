import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from './Avatar'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logotipo from '../../images/celulary.jpg'
// C:\repos\celulares\src\images\celulary.jpg
// import logo from '../../../src/logo.svg'
import '../CSS/avatar.css'
import {
    Link
} from "react-router-dom";
import { Grid } from '@material-ui/core';
const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function TemporaryDrawer({ estadoD }) {

    const classes = useStyles();
    const [state, setState] = React.useState({
        left: estadoD
    });

    const toggleDrawer = (side, open) => event => {

        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, left: open });
    };

    // useEffect(()=>{
    //     console.log("toggleDrawer", estadoD);
    //     // setState({ ...state, left: estadoD });
    // },[estadoD,state])

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            {/* <List>
                <ListItem button key='Iniciar sesión'>
                    <Link to="/login">Iniciar sesión</Link>
                </ListItem>
                <ListItem button key='Registrarme'>
                    <Link to="/registro">Registrarme</Link>
                </ListItem>
            </List> */}
            <Divider />
            <List>
                <Link to="/Login">
                    <ListItem button key="Iniciar sesión">
                        <ListItemIcon>{<InboxIcon />}</ListItemIcon>
                        <ListItemText primary="Iniciar sesión" />
                    </ListItem>
                </Link>
                <Link to="/registro">
                    <ListItem button key="Registrarme">
                        <ListItemIcon>{<InboxIcon />}</ListItemIcon>
                        <ListItemText primary="Registrarme" />
                    </ListItem>
                </Link>
                <Link to="/celulares/1">
                    <ListItem button key="Salir">
                        <ListItemIcon>{<InboxIcon />}</ListItemIcon>
                        <ListItemText primary="Salir" />
                    </ListItem>
                </Link>
            </List>
        </div>
    );

    const fullList = side => (
        <div
            className={classes.fullList}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {/* {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))} */}
            </List>
        </div>
    );

    return (
        <div>
            <div onClick={toggleDrawer('left', true)}>
            <Grid container
                spacing={3}>
                <Grid item
                    xs={0}
                    sm={2}>                <IconButton className="avatar" aria-label="menu">
                    <MenuIcon />
                </IconButton></Grid>
                                    <Grid item
                    xs={0}
                    sm={2}>
                        <img src={logotipo} className="logotipo"/>
                        {/* <h3>Tecnología a crédito</h3> */}
                        </Grid>
                                    <Grid item
                    xs={0}
                    sm={2}><Avatar /></Grid>
                    </Grid>                    
            </div>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
        </div>
    );
}
