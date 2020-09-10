import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function FormControlLabelPlacement({evento}) {
  const eve = (dato)=>{
    evento(dato)
  }
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Situación laboral</FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue="estudio">
        <FormControlLabel value="estudio" onClick={()=>{eve(0)}} control={<Radio color="primary" />} label="Estudio" />
        <FormControlLabel value="trabajo" onClick={()=>{eve(1)}} control={<Radio color="primary" />} label="Trabajo" />
      </RadioGroup>
    </FormControl>
  );
}
