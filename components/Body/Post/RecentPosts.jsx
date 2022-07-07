import { useState, useEffect, useContext } from "react";
import { PostContext } from "../../../contexts/PostContext";
import { getRecentPosts } from "../../../services/posts";
import Link from "next/link";

const RecentPosts = ({ id }) => {
  const [recentPosts, setRecentPosts] = useState([]);
  const { posts } = useContext(PostContext);
  useEffect(() => {
    if (posts) {
      setRecentPosts(getRecentPosts(posts));
    }
  }, [posts, id]);
  return (
    <>
      <div>
        <h2 className="__categories-title">Bài viết gần đây</h2>
        <div style={{ borderBottom: "1px solid #000" }} />
        <div className="__categories-box">
          {recentPosts.length - 1 !== 0 ? (
            recentPosts
              .filter((post) => post._id !== id)
              .map((post) => (
                <Link href={`/posts/${post._id}`} key={post._id} passHref>
                  <a>
                    <div className="__categories-category-name">
                      {post.title}
                    </div>
                  </a>
                </Link>
              ))
          ) : recentPosts.length - 1 === 0 ? (
            <div className="__categories-category-name">Không có bài viết</div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default RecentPosts;
