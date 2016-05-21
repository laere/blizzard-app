export const WOW_PLAYERINFO_REQUEST = 'WOW_PLAYERINFO_REQUEST';
export const WOW_PLAYERINFO_SUCCESS = 'WOW_PLAYERINFO_SUCCESS';
export const WOW_PLAYERINFO_FAILURE = 'WOW_PLAYERINFO_FAILURE';
export const WOW_PLAYERINFO_SEARCHVALUE = 'WOW_PLAYERINFO_SEARCHVALUE';
export const WOW_REALM_SEARCHVALUE = 'WOW_REALM_SEARCHVALUE';

export const playerSearchValue = (player) => {
  return {
    type: WOW_PLAYERINFO_SEARCHVALUE,
    player
  }
}

export const realmSearchValue = (realm) => {
  return {
    type: WOW_REALM_SEARCHVALUE,
    realm
  }
}

const request = () => {
  return {
    type: WOW_PLAYERINFO_REQUEST
  }
}

const receive = (type, data) => {
  return {
    type,
    data
  }
}

export const fetch = (url, { params }) => {
  return (dispatch) => {
    dispatch(request());

    return axios.get(url, { params })
      .then(res => dispatch(receive(WOW_PLAYERINFO_SUCCESS)))
      .catch(res => dispatch(receive(WOW_PLAYERINFO_FAILURE)))
  }
}
