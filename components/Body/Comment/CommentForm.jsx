import React from "react";

const CommentForm = () => {
  return (
    <>
      <h3
        style={{
          marginBottom: 0,
          width: "fit-content",
          backgroundColor: "#000",
          color: "#fff",
          padding: "0.25rem 1rem",
        }}
      >
        Bình luận
      </h3>
      <div style={{ borderBottom: "1px solid black" }} />
      <div className="__comment-form">
        <textarea placeholder="Nhập bình luận của bạn..."></textarea>
        <div className="d-flex row-reverse">
          <button className="btn">Gửi</button>
        </div>
      </div>
    </>
  );
};

export default CommentForm;
