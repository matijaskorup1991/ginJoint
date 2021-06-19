import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Home />
    </BrowserRouter>
  );
}

export default App;
