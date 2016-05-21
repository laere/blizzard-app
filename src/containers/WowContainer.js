import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { playerSearchValue, realmSearchValue, fetch } from '../actions/WOWActions';
import Wow from '../components/Wow';

class WowContainer extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    player: PropTypes.string.isRequired,
    realm: PropTypes.string.isRequired,
    fetchPlayerInfo: PropTypes.func.isRequired,
    trackPlayerValue: PropTypes.func.isRequired,
    trackRealmValue: PropTypes.func.isRequired
  }

  constructor() {
    super();
    this._handleOnSubmit = this._handleOnSubmit.bind(this);
    this._handlePlayerOnChange = this._handlePlayerOnChange.bind(this);
    this._handleRealmOnChange = this._handleRealmOnChange.bind(this);
  }

  _handleOnSubmit(e) {
    e.preventDefault();
    const { fetchPlayerInfo, player, realm } = this.props;
    fetchPlayerInfo(`https://us.api.battle.net/wow/${player}/${realm}/Peratryn?locale=en_US&apikey=vqt6xzgau4jhux79xrc69g89gbg73uqx`)
  }

  _handlePlayerOnChange(e) {
    const { player } = this.props;
    trackPlayerValue(player);
  }

  _handleRealmOnChange(e) {
    const { player } = this.props;
    trackRealmValue(realm);
  }

  render() {
    return (
      <Wow />
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
      trackPlayerValue: (player) => dispatch(playerSearchValue(player)),
      trackRealmValue: (realm) => dispatch(realmSearchValue(realm))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(WowContainer);
