import * as types from '../actions/actionTypes';
import initialState from './initialState';

/*
* reducer for HomePage
* */
export default function homeReducer(state = initialState.news, action) {
  switch (action.type) {
    case types.LOAD_NEWS_BY_ID_BEGIN:
      return {
        ...state,
        isLoading: true
      };
    case types.LOAD_NEWS_BY_ID_SUCCESS:
     return{
       ...state,
       newsList: action.news,
       isLoading:false
     };
    default:
      return state;
  }
}