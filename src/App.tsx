import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Home />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
