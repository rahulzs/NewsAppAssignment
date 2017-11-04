import * as types from './actionTypes';
import NewsApi from '../api/NewsApi';

/*action is called before getNews api call.
 It indicates that api call has started*/
export function loadNewsBegin() {
  return {type: types.LOAD_NEWS_BY_ID_BEGIN};
}

/*action is called when getNews api is successful.*/
export function loadNewsSuccess(news) {
  return {type: types.LOAD_NEWS_BY_ID_SUCCESS, news};
}

/*
 loadnews fetch news details based on the newsId. It uses thunk middleware.
 loadNewsBegin action is dispatched first, just to indicate that api call has started.
 thunk: make async call to api*/
export function loadNews(newsId) {
  return function (dispatch) {
    dispatch(loadNewsBegin());
    return NewsApi.getAllNews(newsId)
      .then(news => {
        dispatch(loadNewsSuccess(news));
      }).catch(error => {
        throw (error);
      });
  };
}