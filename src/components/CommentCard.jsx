export default function CommentCard({ body, author, comment_count }) {
  return (
    <>
      <label className="commentheader">Comment</label>
      <br/>
      
      <section className="comments">
        {body}
        <br />
        <br />
        Author: {author}
        {comment_count}
      </section>
      <br/>
    </>
  );
}
