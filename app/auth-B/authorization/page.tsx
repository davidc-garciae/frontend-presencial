import * as React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Button} from '@mui/material';

const rows = [

    {
        name: 'Frozen yoghurt',
        role : '159'
    },
    {
        name: 'Frozen yoghurt',
        role : '159'
    },
    {
        name: 'Frozen yoghurt',
        role : '159'
    },
    {
        name: 'Frozen yoghurt',
        role : '159'
       }
  ];


export default function authorization(){

    return (
        <Grid container>
            <Grid item xs={12}>Busqueda de Usuarios</Grid >
        <Grid item xs={12}>Ingrese el Email, nombre o rol del usuario</Grid>
        <Grid item xs={8}>Filtro</Grid>
        <Grid item xs={4}><Button  color= "primary" variant ="contained" >Buscar</Button></Grid>


        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell align="right">Rol</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.role}</TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Grid>
      );
}


