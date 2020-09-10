import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

export default function IconButtons({confirmar,id}) {
    const classes = useStyles();

    return (
        <div>
            <IconButton className={classes.button} aria-label="delete" onClick={()=>{confirmar(id)}}>
                <DeleteIcon />
            </IconButton>
        </div>
    );
}
