import React from 'react';

//import { Container } from './styles';
import Grid from "@material-ui/core/Grid";
import ContainerLeft from './../ContainerLeft'
//import ContainerRight from './../ContainerRight'
import Map from './../Map'



export default function Board() {
  return (
    
      <Grid container className="grid-container">
      <Grid
        item
        sm={7}
        className={"grid-column"}
      >
        <ContainerLeft />
        <ContainerLeft />
        <ContainerLeft />
        <ContainerLeft />
      </Grid>
      <Grid
        item
        sm={5}
        className={"grid-column"}
      >
        <Map />
      </Grid>
    </Grid>
    
  );
}