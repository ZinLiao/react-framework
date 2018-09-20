import React, { Component } from 'react';
import './Header.css';

import Nav from '../Nav/Nav';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Nav></Nav>
      </div>
    );
  }
}

export default Header;