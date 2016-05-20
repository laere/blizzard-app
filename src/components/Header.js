import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav role="navigation">
          <div className="navContainer">
            <div className="navContainer__Logo">Logo</div>
            <div className="navContainer__NavLinks">
              <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}