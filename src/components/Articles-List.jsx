import { useState } from "react";
import ArticleCard from "./Article-Card";
import { getArticles } from "../Utils/api";
import { useEffect } from "react";

const Articleslist = () => {
  const [articles, setArticles] = useState([]);
  const[loading, setloading] = useState(true);

  useEffect(() => {
    setloading(true);
    getArticles()
      .then((fetchedArticles) => {
        setArticles(fetchedArticles);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if(loading) {
    return <h3 className="loading"> Be there in a sec!</h3>
  }

  return (
    <ul className="articleslist">
      {articles.map((article) => {
        const {
          article_id,
          author,
          title,
          topic,
          article_img_url,
          votes,
          comment_count,
        } = article;
        return (
          <ArticleCard
            key={article_id}
            topic={topic}
            title={title}
            article_img_url={article_img_url}
            author={author}
            article_id={article_id}
            comment_count={comment_count}
            votes={votes}
          />
        );
      })}
    </ul>
  );
};

export default Articleslist;
