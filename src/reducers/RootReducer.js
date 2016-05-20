import { combineReducers } from 'redux';
import { wowPlayer } from '../reducers/WOWPlayerInfoReducer';

const rootReducer = combineReducers({
  wowPlayer,
});

export default rootReducer;
