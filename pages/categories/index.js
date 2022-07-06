import { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
import { Loading } from "../../components";
import Link from "next/link";

const Categories = () => {
  const { categories, categoryPosts } = useContext(PostContext);
  if (!categories || !categoryPosts) return <Loading />;
  return (
    <>
      <div className="__categories-btn">
        {categories.map((category) => (
          <button
            key={category.slug}
            className="btn"
            style={{
              position: "relative",
            }}
          >
            <Link href={`/categories/${category.slug}`}>
              <a>{category.name}</a>
            </Link>
            <div
              style={{
                fontSize: 12,
                backgroundColor: "#ffdd00",
                color: "#000",
                padding: "0.2rem",
                borderRadius: "0.1rem",
                position: "absolute",
                top: "-50%",
                right: "-10%",
                width: 20,
                height: 20,
                fontWeight: "bold",
              }}
              className="center"
            >
              {
                categoryPosts.filter((post) => post.slug === category.slug)[0]
                  .posts.length
              }
            </div>
          </button>
        ))}
      </div>
    </>
  );
};

export default Categories;
