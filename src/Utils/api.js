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
  console.log(id);
  return newsApi.get(`/articles/${id}`).then((response) => {
    return response.data.articles;
  });
};
