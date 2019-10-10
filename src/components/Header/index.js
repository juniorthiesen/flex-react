import React from 'react';
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          <h1>FLEX</h1>
        </Typography>
      </Toolbar>
    </AppBar>
    </Container>
  );
}