import React from 'react';

import { Container, Card } from './styles';
import Grid from "@material-ui/core/Grid";


export default function Produto() {
  return (
    <Grid item md={4}>
    <Container>
    
    <Card>
      <img src="https://picsum.photos/255/165" alt="outdoor"></img>
    <header>
      <h6>outdoor</h6>
      <h2>Gaspar</h2>
    </header>
    <bodycard>
    <p>Santa Cruz Figueira, Sentido Palhoça - BR-282 - Prox. Termas do Tabuleiro Resort</p>
    <p>Metragem</p>
    </bodycard>
    </Card>
    </Container>
    </Grid>
  );
}