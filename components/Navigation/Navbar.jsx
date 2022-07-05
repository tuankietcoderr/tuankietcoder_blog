import Link from "next/link";
import React, { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
import Loading from "../Loading/Loading";

const Navbar = () => {
  const { categories } = useContext(PostContext);
  if (!categories) return <Loading />;
  return (
    <header>
      <div className="brand">
        <Link href="/" passHref>
          <a>
            &lt;tk <span className="coder">coder</span> /&gt;
          </a>
        </Link>
      </div>
      <ul>
        <Link href="/" passHref>
          <a>
            <li>Trang chủ</li>
          </a>
        </Link>
        <Link href="/categories" passHref>
          <a>
            <li className="_li-category">
              Danh mục⏬
              <ul className="category-hover">
                {categories.map((item) => (
                  <Link
                    href={`/categories/${item.slug}`}
                    passHref
                    key={item._id}
                  >
                    <a>
                      <li>{item.name}</li>
                    </a>
                  </Link>
                ))}
              </ul>
            </li>
          </a>
        </Link>
        <Link href="/exercises" passHref>
          <a>
            <li>Bài tập lập trình</li>
          </a>
        </Link>
        <Link href="/quizz" passHref>
          <a>
            <li>Quizz</li>
          </a>
        </Link>
        <Link href="/about" passHref>
          <a>
            <li>Giới thiệu</li>
          </a>
        </Link>
      </ul>
    </header>
  );
};

export default Navbar;
