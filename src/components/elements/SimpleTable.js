import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function SimpleTable({precioventa}) {
  const classes = useStyles();

  const createData = (uno,dos,tres,cuatro,cinco,seis,siete,ocho,nueve,diez,once,doce,trece,catorce,quince,dieciseis)=> {
    return { uno,dos,tres,cuatro,cinco,seis,siete,ocho,nueve,diez,once,doce,trece,catorce,quince,dieciseis };
  }


const abonoSemanal = precioventa/16;
  const rows = [
    createData(abonoSemanal,abonoSemanal,abonoSemanal,abonoSemanal,abonoSemanal,abonoSemanal,abonoSemanal,abonoSemanal,abonoSemanal,abonoSemanal,abonoSemanal,abonoSemanal,abonoSemanal,abonoSemanal,abonoSemanal,abonoSemanal),
  ];

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sem. 1</TableCell>
            <TableCell align="right">Sem. 2</TableCell>
            <TableCell align="right">Sem. 3</TableCell>
            <TableCell align="right">Sem. 4</TableCell>
            <TableCell align="right">Sem. 5</TableCell>
            <TableCell align="right">Sem. 6</TableCell>
            <TableCell align="right">Sem. 7</TableCell>
            <TableCell align="right">Sem. 8</TableCell>
            <TableCell align="right">Sem. 9</TableCell>
            <TableCell align="right">Sem. 10</TableCell>
            <TableCell align="right">Sem. 11</TableCell>
            <TableCell align="right">Sem. 12</TableCell>
            <TableCell align="right">Sem. 13</TableCell>
            <TableCell align="right">Sem. 14</TableCell>
            <TableCell align="right">Sem. 15</TableCell>
            <TableCell align="right">Sem. 16</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.uno}>
              <TableCell component="th" scope="row">
                {row.uno}
              </TableCell>
              <TableCell align="right">{row.dos}</TableCell>
              <TableCell align="right">{row.tres}</TableCell>
              <TableCell align="right">{row.cuatro}</TableCell>
              <TableCell align="right">{row.cinco}</TableCell>
              <TableCell align="right">{row.seis}</TableCell>
              <TableCell align="right">{row.siete}</TableCell>
              <TableCell align="right">{row.ocho}</TableCell>
              <TableCell align="right">{row.nueve}</TableCell>
              <TableCell align="right">{row.diez}</TableCell>
              <TableCell align="right">{row.once}</TableCell>
              <TableCell align="right">{row.doce}</TableCell>
              <TableCell align="right">{row.trece}</TableCell>
              <TableCell align="right">{row.catorce}</TableCell>
              <TableCell align="right">{row.quince}</TableCell>
              <TableCell align="right">{row.dieciseis}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
