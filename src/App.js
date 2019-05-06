import React from 'react';
import './App.scss';

import Header from './components/header'
import Jumbotron from './components/jumbotron'
import Container from './components/container'

function App() {
  return (
    <div>
      <Header />
      <Jumbotron />
      <Container />
    </div>
  );
}

export default App;
