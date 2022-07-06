import Link from "next/link";
import { useContext } from "react";
import { PostContext } from "../../../contexts/PostContext";
import { useRouter } from "next/router";

const Categories = () => {
  const { categories, categoryPosts } = useContext(PostContext);
  const router = useRouter();
  return (
    <>
      {categories && categoryPosts && (
        <div>
          <h2 className="__categories-title">Danh mục</h2>
          <div style={{ borderBottom: "1px solid #000" }} />
          <div className="__categories-box">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                passHref
              >
                <a>
                  <div
                    className={`d-flex space-between __categories-category-name ${
                      router.query.slug === category.slug ? "active" : ""
                    }`}
                  >
                    <div>{category.name}</div>
                    <div>
                      {
                        categoryPosts.filter(
                          (post) => post.slug === category.slug
                        )[0].posts.length
                      }
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Categories;
