import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { playerSearchValue, realmSearchValue, fetch } from '../actions/WOWActions';
import Wow from '../components/Wow';
import Loading from '../components/Loading';

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
    const apiKey = 'vqt6xzgau4jhux79xrc69g89gbg73uqx',
          fields = 'fields=mounts+guild+items+hunterPets+appearance+achievments+pet+talents+reputation+titles+stats+pvp+professions';
    fetchPlayerInfo(`https://us.api.battle.net/wow/character/${realm}/${player}?${fields}&locale=en_US&apikey=${apiKey}`);
  }

  _handlePlayerOnChange(e) {
    const { trackPlayerValue } = this.props;
    trackPlayerValue(e.target.value);
  }

  _handleRealmOnChange(e) {
    const { trackRealmValue } = this.props;
    trackRealmValue(e.target.value);
  }

  render() {
    const { playerdata } = this.props;
    return (
      <Wow playerdata={playerdata}
           onSubmit={this._handleOnSubmit}
           onPlayerChange={this._handlePlayerOnChange}
           onRealmChange={this._handleRealmOnChange} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playerdata: state.wow.playerInfo.data,
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
