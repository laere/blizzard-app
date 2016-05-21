import React, { Component, PropTypes } from 'react';
import SearchBar from '../components/SearchBar';
import WowPlayerInfo from '../components/WowPlayerInfo';

export default class Wow extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WowPlayerInfo />
      </div>
    );
  }
}
