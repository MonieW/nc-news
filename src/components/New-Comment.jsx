import { useState } from "react";
import { postComment } from "../Utils/api";
import CommentList from "./Comment-List";

const CommentForm = ({ article_id, setComments }) => {
  const [newComment, setNewComment] = useState({
    body: "",
    author: "cooljmessy",
  });
  const [isError, setIsError] = useState(false);
  const [isDisabled, setDisabled] = useState(false);

  const handleChange = (e) => {
    setNewComment((currComment) => {
      const updatedComment = { ...currComment };
      updatedComment.body = e.target.value;
      return updatedComment;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisabled(true);
    postComment(article_id, newComment)
      .then((response) => {
        setDisabled(false);
        setNewComment({ body: "", author: "cooljmessy" });
        setComments((currentComments) => {
          const updatedComments = [...currentComments, response];
          return updatedComments;
        });
      })
      .catch((err) => {
        setIsError(true);
      });
  };
  if (isError) {
    return <p>Ah thats a pain! Something went wrong! </p>;
  }

  return (
    <>
      <label className="newcomment">Have your say!</label>
      <form onSubmit={handleSubmit} className="comment-form">
        <label htmlFor="comment-box" className="comment-label"></label>
        <textarea
          name="comment" required
          id="comment-box"
          type="text"
          className="comment-input"
          value={newComment.body}
          onChange={handleChange}
        />
        <br />
        <button disabled={isDisabled} className="comment-button" type="submit">
          Post Away!
        </button>
      </form>
    </>
  );
};
export default CommentForm;
