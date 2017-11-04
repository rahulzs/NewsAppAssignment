import * as types from './actionTypes';
import newsApi from '../api/newsApi';

/*action is called before getAllNews api call.
 It indicates that api call has started*/
export function loadNewsBegin() {
  return {type: types.LOAD_NEWS_BEGIN};
}

/*action is called when getAllNews api is successful.*/
export function loadNewsSuccess(news) {
  return {type: types.LOAD_NEWS_SUCCESS, news};
}

/*thunk: make async call to api*/
export function loadNews(newsName) {
  return function (dispatch) {
    dispatch(loadNewsBegin());
    return newsApi.getAllNews(newsName).then(news => {
      dispatch(loadNewsSuccess(news));
      }).catch(error => {
      throw (error);
    });
  };
}