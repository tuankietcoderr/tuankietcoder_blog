import { useState } from "react";

const CategoryManager = ({ categories, categoryPosts }) => {
  const [createCategoryModal, setCreateCategoryModal] = useState(false);
  return (
    <>
      <div className="d-flex space-between">
        <h1>Danh mục</h1>
        <div className="center">
          <button className="btn" style={{ height: "fit-content" }}>
            Tạo
          </button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>No. Posts</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {categories.lengh !== 0 ? (
            categories.map((category, index) => (
              <tr key={category._id}>
                <td>{index + 1}</td>
                <td>{category.name}</td>
                <td>
                  {
                    categoryPosts.filter(
                      (post) => post.slug === category.slug
                    )[0].posts.length
                  }
                </td>
                <td>
                  <div className="d-flex" style={{ gap: 10 }}>
                    <button className="btn" style={{ backgroundColor: "blue" }}>
                      Edit
                    </button>
                    <button className="btn" style={{ backgroundColor: "red" }}>
                      Del
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} style={{ textAlign: "center" }}>
                Không có dữ liệu
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default CategoryManager;
