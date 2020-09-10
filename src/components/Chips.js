import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function SmallChips({color,label}) {
  const classes = useStyles();

  const handleDelete = () => {
    alert('You clicked the delete icon.');
  };

  const handleClick = () => {
    alert('You clicked the Chip.');
  };

  return (
    <div className={classes.root}>
      <Chip
        size="small"
        icon={<FaceIcon />}
        label={label}
        onDelete={handleDelete}
        color={color}
      />
    </div>
  );
}
