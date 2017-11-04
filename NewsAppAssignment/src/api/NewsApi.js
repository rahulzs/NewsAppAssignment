//Base url of api.
const BASE_URL = 'https://newsapi.org/v1/articles?source=';
const BASE_URL_END='&sortBy=top&apiKey=63e9551019de482d820542110f5b49ec';

class NewsApi {
  
  static getAllNews(newsName) {
    return fetch(`${BASE_URL}` + newsName + BASE_URL_END).then((response) => {
      return response.json();
    }).then(response => {
      return response.articles;
    });
  }

 
  static getNews(newsId) {

    return fetch(`${BASE_URL}?i=` + newsId).then((response) => {
      return response.json();
    }).then(json => {
      return json;
    });
  }
}

export default NewsApi;