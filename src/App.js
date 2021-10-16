import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Nav from './components/features/Nav';
import ProductList from './components/pages/ProductList';
import Details from './components/pages/Details';
import Cart from './components/pages/cart/Cart';
import Footer from './components/features/Footer';
import Default from './components/pages/Default';
import Contact from './components/pages/contact';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />

        <Switch>
          <Route exact path="/Shirt-Front" component={ProductList} />
          <Route path="/Shirt-Front/details" component={Details} /> 
          <Route path="/Shirt-Front/cart" component={Cart} />
          <Route path="/Shirt-Front/contact" component={Contact} />
          {/* <Route path="/Shirt-Front/login" component= {Login} /> */}
          <Route component={Default} />
        </Switch>

        <Footer />

      </React.Fragment>
    );
  }
}

export default App;
