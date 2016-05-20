import React, { Component } from 'react';
import '../../scss/header.scss';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav role="navigation">
          <div className="navContainer">
            <h1 className="navContainer__Logo">Logo</h1>
            <ul className="navContainer__NavLinks">
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
