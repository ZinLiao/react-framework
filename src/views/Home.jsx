import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import Hosts from '../views/Hosts/Hosts';
import Product from '../views/Product/Product';
import About from '../views/About/About';

class Home extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Route exact path="/" component={Hosts} />
        <Route path="/product" component={Product} />
        <Route path="/about" component={About} />
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;