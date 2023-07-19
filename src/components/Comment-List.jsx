import CommentCard from "./CommentCard";
import { useState, useEffect } from "react";
import { getComments } from "../Utils/api";

const CommentList = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id)
      .then((fetchedComments) => {
        setComments(fetchedComments);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ul className="commentslist">
      {comments.map((comments) => {
        const { comment_id, body, author, comment_count } = comments;
        return (
          <CommentCard
            key={comment_id}
            body={body}
            author={author}
            comment_count={comment_count}
          />
        );
      })}
    </ul>
  );
};

export default CommentList;
