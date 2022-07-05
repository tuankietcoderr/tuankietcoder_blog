import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { Loading, Post } from "../../components";
import { PostContext } from "../../contexts/PostContext";

const Category = () => {
  const router = useRouter();
  const { posts } = useContext(PostContext);
  const [categoryPosts, setCategoryPosts] = useState(null);
  useEffect(() => {
    if (router.isReady) {
      if (posts) {
        setCategoryPosts(
          posts.filter((post) => post.category.includes(router.query.slug))
        );
      }
    }
  }, [router.isReady, router.query.slug, posts]);
  if (!categoryPosts || !posts) return <Loading />;
  return (
    <>
      {categoryPosts.map((post) => (
        <Post key={post._id} {...post} />
      ))}
    </>
  );
};

export default Category;
