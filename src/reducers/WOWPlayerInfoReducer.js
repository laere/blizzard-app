import * as actions from '../actions/WOWActions';
import { combineReducers } from 'redux';

const initialState = {
  data: null,
  isFetching: false,
  receivedAt: null
}

export const playerInfo = (state = initialState, action) => {
  switch(action.type) {
    case actions.WOW_PLAYERINFO_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case actions.WOW_PLAYERINFO_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false,
        receivedAt: Date.now(),
      }
    case actions.WOW_PLAYERINFO_FAILURE:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state;
  }
}

export const playerSearchValue = (state = '', action) => {
  switch(action.type) {
    case actions.WOW_PLAYERINFO_SEARCHVALUE:
      return action.player;
    default:
      return state;
  }
}

export const realmSearchValue = (state = '', action) => {
  switch(action.type) {
    case actions.WOW_REALM_SEARCHVALUE:
      return action.realm;
    default:
      return state;
  }
}

export const wow = combineReducers({
  playerInfo,
  playerSearchValue,
  realmSearchValue,
});
