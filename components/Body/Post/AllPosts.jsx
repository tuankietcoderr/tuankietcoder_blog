import Post from "./Post";
import { PostContext } from "../../../contexts/PostContext";
import { useContext } from "react";

const AllPosts = () => {
  const { posts } = useContext(PostContext);
  return (
    <>
      <div>
        <h2>Tất cả bài viết</h2>
        {posts && posts.map((post) => <Post key={post._id} {...post} />)}
      </div>
    </>
  );
};

export default AllPosts;
