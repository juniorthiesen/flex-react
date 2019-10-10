import React from 'react';
//import Produto from './../Produto'
import Grid from "@material-ui/core/Grid";
import Cards from './../Cards'


import { Container } from './styles';

export default function ContainerLeft() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Cards /> <Cards /><Cards /> 
      </Grid>
      </Container>
      
    
  );
}
