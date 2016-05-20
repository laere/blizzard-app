import React, { Component } from 'react';
import { Link } from 'react-router';

const HeroLink = (props) => {
  return (
    <Link to={props.path}>
      <div className="homePage__HeroLink">
        <img src={props.img} alt="image of the game" />
      </div>
    </Link>
  );
}

export default HeroLink;
