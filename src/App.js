import React from 'react';

import GlobalStyle from './styles/global';
import Header from './components/Header'
import Board from './components/Board';


function App() {
  return (
    <>
      <React.Fragment>
      <Header />
      <Board />
      <GlobalStyle />
      </React.Fragment>
    </>
  );
}

export default App;