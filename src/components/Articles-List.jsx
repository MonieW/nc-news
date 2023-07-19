import { useState } from "react";
import ArticleCard from "./Article-Card";
import { getArticles } from "../Utils/api";
import { useEffect } from "react";

const Articleslist = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles()
      .then((fetchedArticles) => {
        setArticles(fetchedArticles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
