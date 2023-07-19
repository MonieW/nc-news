import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://moniew.onrender.com/api",
});

export const getArticles = () => {
  return newsApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
};
export const getArticleByid = (id) => {
  return newsApi.get(`/articles/${id}`).then((response) => {
    return response.data.articles;
  });
};
export const getComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then ((response) => {
    return response.data.comments;
  })
}
