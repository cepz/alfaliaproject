import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import {Container} from 'react-bootstrap'

import Header from '../../component/Header';
import Navbar from '../../component/Navbar';
import WhatsappLogo from '../../component/whatsapp';

import Home from '../Home'
import Product from '../Product'
import Article from '../Article'
import Cart from '../Cart'
import Login from '../Login'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Container fluid>
          <Header/>
          <Navbar/>
          <WhatsappLogo/>
            <Route path="/" exact component={Home}/>
            <Route path="/product" component={Product}/>
            <Route path="/articles" component={Article}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/login" component={Login}/>
        </Container>
      </Router>
    </div>
  );
}

export default App;
