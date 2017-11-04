import {combineReducers} from 'redux';
import homeReducer from './homeReducer';

/*
* combining multiple ruducers at one place and returning rootReducer
* */
const rootReducer = combineReducers({
  homeReducer
});

export default rootReducer;