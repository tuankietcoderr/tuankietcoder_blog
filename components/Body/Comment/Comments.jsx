import moment from "moment";

const Comments = ({ comments }) => {
  return (
    <>
      {comments.map((comment, index) => (
        <div key={index} style={{ marginBottom: 15 }}>
          <p>{comment.description}</p>
          <em style={{ fontSize: 12 }}>
            vào lúc {moment(comment.createdAt).format("hh:mm A, DD/MM/YYYY")}
          </em>
        </div>
      ))}
    </>
  );
};

export default Comments;
