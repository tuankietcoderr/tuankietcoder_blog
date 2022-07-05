import Link from "next/link";
import { useContext } from "react";
import { PostContext } from "../../../contexts/PostContext";

const Categories = () => {
  const { categories } = useContext(PostContext);
  return (
    <>
      {categories && (
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
                  <div className="__categories-category-name">
                    {category.name}
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
