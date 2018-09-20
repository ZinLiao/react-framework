import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div>
        <h1 className="Logo">React</h1>
        <ul className="Nav">
          <li><NavLink exact to="/" activeClassName="on">HOME</NavLink></li>
          <li><NavLink to="/product" activeClassName="on">PRODUCT</NavLink></li>
          <li><NavLink to="/about" activeClassName="on">ABOUT</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Nav;