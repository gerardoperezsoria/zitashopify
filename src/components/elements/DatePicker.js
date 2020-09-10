import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  //KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers({label,nombre, evento}) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState();

  const handleDateChange = name => date =>{
    setSelectedDate(date);
    let dato={target:{name:name,value:date}}
    evento(dato)
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">       
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label={label}
          value={selectedDate}
          onChange={handleDateChange(nombre)}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>    
  );
}
