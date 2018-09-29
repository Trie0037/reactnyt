import axios from "axios";

export default {
  //queries the New York Times API with provided parameters
  queryNewYorkTimes: function(article, startYear, endYear) {
    //const API_Key = process.env.NEWYORKTIMESAPIKEY;
    const API_Key = '4fe0a632547348c5b8ab64696c41b719';

    const URL =
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_Key}&q=${article}&begin_date=${startYear}0101&end_date=${endYear}0101`;
    return axios.get(URL);
  },

  
  // Gets all articles from my API
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
