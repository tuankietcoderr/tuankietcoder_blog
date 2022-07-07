import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { Categories, Loading, Post } from "../../components";
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
      <main>
        <div>
          {categoryPosts.length !== 0 ? (
            categoryPosts.map((post) => <Post key={post._id} {...post} />)
          ) : (
            <h2>
              Không có bài viết nào thuộc danh mục{" "}
              <span className="btn">{router.query.slug}</span>
            </h2>
          )}
        </div>
        <Categories />
      </main>
    </>
  );
};

export default Category;
