import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const CommentForm = ({ _id, comments, setComments }) => {
  const [comment, setComment] = useState("");
  const handleSubmit = async () => {
    if (!comment) {
      return toast.error("Bạn chưa nhập bình luận");
    }
    comments.push({ description: comment, createdAt: new Date() });
    console.log(comments);
    await axios
      .put(`/api/posts/${_id}`, { comments })
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        console.log(res);
        setComment("");
        setComments(res.data.comments);
        toast("Cảm ơn bạn đã bình luận!");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <ToastContainer
        newestOnTop={false}
        autoClose={3000}
        position="bottom-right"
      />
      <h3
        style={{
          marginBottom: 0,
          width: "fit-content",
          backgroundColor: "#000",
          color: "#fff",
          padding: "0.25rem 1rem",
        }}
        id="comment"
      >
        Bình luận
      </h3>
      <div style={{ borderBottom: "1px solid black" }} />
      <div className="__comment-form">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Nhập bình luận của bạn..."
        ></textarea>
        <div className="d-flex row-reverse">
          <button className="btn" onClick={handleSubmit}>
            Gửi
          </button>
        </div>
      </div>
    </>
  );
};

export default CommentForm;
