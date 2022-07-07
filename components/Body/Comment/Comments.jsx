import moment from "moment";

const Comments = ({ comments }) => {
  return (
    <>
      {comments.length !== 0 ? (
        comments.map((comment, index) => (
          <div key={index} style={{ marginBottom: 15 }}>
            <p>{comment.description}</p>
            <em style={{ fontSize: 12 }}>
              vào lúc {moment(comment.createdAt).format("hh:mm A, DD/MM/YYYY")}
            </em>
          </div>
        ))
      ) : (
        <p>Chưa có bình luận nào</p>
      )}
    </>
  );
};

export default Comments;
