import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Tooltip from '@material-ui/core/Tooltip';
const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function IconLabelButtons({handleButton, texto}) {
    const classes = useStyles();

    // const handleButton = () => {
    //     console.log('botonazo');
    //     evento()
    // }

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={(texto ==="Hacer pedido") || (texto="Siguiente") || (texto="Continuar") ? <Icon>send</Icon> :<Icon><Tooltip title="Eliminar articulo"><DeleteOutlinedIcon/></Tooltip></Icon>}
                onClick={handleButton}
            >
                {texto}
      </Button>
        </div>
    );
}
