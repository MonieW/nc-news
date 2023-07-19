import { Link } from "react-router-dom";

export default function ArticleCard({
  article_id,
  author,
  title,
  topic,
  article_img_url,
  votes,
  comment_count,
}) {
  return (
    <Link to={`/articles/${article_id}`}>
      <section className="articlesCard">
        <h1 className="articletitle">{title}</h1>
        Article id: {article_id}
        <br />
        Topic: {topic} <br />
        <br />
        <img src={article_img_url} alt="picture relating to article" />
        <br />
        Author: {author} <br />
        Comments: {comment_count}
        <br />
        Votes: {votes}
      </section>
    </Link>
  );
}
