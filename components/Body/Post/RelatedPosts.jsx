import { useState, useEffect, useContext } from "react";
import { PostContext } from "../../../contexts/PostContext";
import { getRelatedPosts } from "../../../services/posts";
import Link from "next/link";

const RelatedPosts = ({ categories, id }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const { posts } = useContext(PostContext);
  useEffect(() => {
    if (posts) {
      setRelatedPosts(getRelatedPosts(categories, posts));
    }
  }, [posts, categories]);
  console.log(relatedPosts);
  return (
    <>
      <div>
        <h2 className="__categories-title">Bài viết liên quan</h2>
        <div style={{ borderBottom: "1px solid #000" }} />
        <div className="__categories-box">
          {relatedPosts.length !== 0 ? (
            relatedPosts
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
          ) : relatedPosts.length === 0 ? (
            <div className="__categories-category-name">Không có bài viết</div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default RelatedPosts;
