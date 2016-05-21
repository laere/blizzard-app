import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { playerSearchValue, fetch } from '../actions/WOWActions';
import SearchBar from '../components/SearchBar';
import WowPlayerInfo from '../components/WowPlayerInfo';

class WowContainer extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    searchValue: PropTypes.string.isRequired,
    fetchPlayerInfo: PropTypes.func.isRequired,
    trackSearchValue: PropTypes.func.isRequired
  }

  constructor() {
    super();

  }
  
  render() {
    return (
      <div>
        <SearchBar />
        <WowPlayerInfo />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.wow.playerInfo.data,
    player: state.wow.playerSearchValue,
    realm: state.wow.realmSearchValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlayerInfo: (url) => dispatch(fetch(url)),
    trackSearchValue: (text) => dispatch(playerSearchValue(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WowContainer);
