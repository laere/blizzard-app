import { combineReducers } from 'redux';
import { wow } from '../reducers/WOWPlayerInfoReducer';

const rootReducer = combineReducers({
  wow,
});

export default rootReducer;
