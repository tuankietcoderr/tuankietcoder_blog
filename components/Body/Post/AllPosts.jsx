import Post from "./Post";
import { PostContext } from "../../../contexts/PostContext";
import { useContext } from "react";
import Loading from "../../Loading/Loading";

const AllPosts = () => {
  const { posts } = useContext(PostContext);
  if (!posts) return <Loading />;
  return (
    <>
      <div>
        <h2>Tất cả bài viết</h2>
        {posts.map((post) => (
          <Post key={post._id} {...post} />
        ))}
      </div>
    </>
  );
};

export default AllPosts;
