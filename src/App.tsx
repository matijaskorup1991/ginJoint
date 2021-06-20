import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
