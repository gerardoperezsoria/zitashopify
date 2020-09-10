import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 250,
    },
}));

export default function UncontrolledTextField({ eventoText }) {
    const classes = useStyles();

    const evento = (event) => {
        eventoText(event.target.value)
    }

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <div>
                <TextField
                    id="standard-search"
                    label="Buscar"
                    type="search"
                    className={classes.textField}
                    margin="normal"
                    onChange={evento}
                />
            </div>
        </form>
    );
}
