import axios from "axios";
import { useState } from "react";
import CreatePost from "../../Modal/CreatePost";
const PostManager = ({ posts, setPosts }) => {
  const [createPostModal, setCreatePostModal] = useState(false);
  console.log(posts.length);
  const handleDelete = (id) => {
    axios
      .delete(`/api/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPosts(posts.filter((post) => post._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="d-flex space-between">
        <h1>Bài viết</h1>
        <div className="center">
          <button
            className="btn"
            onClick={() => setCreatePostModal(true)}
            style={{ height: "fit-content" }}
          >
            Tạo
          </button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Like</th>
            <th>Dislike</th>
            <th>Share</th>
            <th>Comment</th>
            <th>View</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {posts.length !== 0 ? (
            posts.map((post, index) => (
              <tr key={post._id}>
                <td>{index + 1}</td>
                <td>{post.title}</td>
                <td>{post.likes}</td>
                <td>{post.dislikes}</td>
                <td>{post.shares}</td>
                <td>{post.comments.length}</td>
                <td>{post?.views || 0}</td>
                <td>
                  <div className="d-flex" style={{ gap: 10 }}>
                    <button className="btn" style={{ backgroundColor: "blue" }}>
                      Edit
                    </button>
                    <button
                      className="btn"
                      onClick={() => handleDelete(post._id)}
                      style={{ backgroundColor: "red" }}
                    >
                      Del
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8} style={{ textAlign: "center" }}>
                Không có bài viết nào
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {createPostModal && <CreatePost setShow={setCreatePostModal} />}
    </>
  );
};

export default PostManager;
