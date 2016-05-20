import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav role="navigation">
          <div className="navContainer">
            <div className="navContainer__Logo">Logo</div>
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
