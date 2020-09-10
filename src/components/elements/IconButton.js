import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
//import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
//import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function IconButtons({evento}) {
  const classes = useStyles();

const eventoClick = () => {
  evento()
}

  return (
    <div className={classes.root}>
      <IconButton onClick={eventoClick} color="secondary" aria-label="add an alarm">
        <SearchIcon />
      </IconButton>
    </div>
  );
}
