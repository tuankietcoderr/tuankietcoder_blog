import axios from "axios";
import { useEffect } from "react";
import { useContext, useState } from "react";
import { PostContext } from "../../contexts/PostContext";
import Preview from "./Preview";

const CreatePost = ({ setShow }) => {
  const { categories, setPosts } = useContext(PostContext);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: [],
    _postImg: "",
  });

  const [preview, setPreview] = useState(false);

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, category: [...formData.category, name] });
    } else {
      setFormData({
        ...formData,
        category: formData.category.filter((item) => item !== name),
      });
    }
  };

  const handleSubmit = () => {
    const { title, description, category, _postImg } = formData;
    if (!title || !description || category.length === 0 || !_postImg) return;
    axios
      .post("/api/posts", formData)
      .then((res) => {
        console.log(res);
        setShow(false);
        setPosts([...posts, res.data.data]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="center-100">
        <div className="__post-create">
          <h2>Tạo bài viết</h2>
          <label>
            <b>Tiêu đề</b>
          </label>
          <input
            type="text"
            value={formData.title}
            name="title"
            onChange={onInputChange}
          />
          <label>
            <b>Ảnh đại diện</b>
          </label>
          <input
            type="url"
            value={formData._postImg}
            name="_postImg"
            onChange={onInputChange}
          />
          <label>
            <b>Nội dung</b>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={onInputChange}
          />
          <label>
            <b>Danh mục</b>
          </label>
          <div className="d-flex" style={{ flexWrap: "wrap", gap: "1rem" }}>
            {categories.map((category, index) => (
              <label className="d-flex" key={index} htmlFor={category.slug}>
                <input
                  type="checkbox"
                  name={category.slug}
                  value={category.slug}
                  id={category.slug}
                  onChange={onCheckboxChange}
                />
                <span className="center">{category.name}</span>
              </label>
            ))}
          </div>
          <div
            className="d-flex row-reverse space-between"
            style={{ marginTop: 16 }}
          >
            <div>
              <button className="btn" onClick={() => setPreview(!preview)}>
                Xem trước
              </button>
              <button
                className="btn"
                onClick={handleSubmit}
                style={{ marginLeft: 16 }}
              >
                Tạo
              </button>
            </div>
            <button className="btn" onClick={() => setShow(false)}>
              Đóng
            </button>
          </div>
        </div>
      </div>
      {preview && (
        <Preview setShow={setPreview} content={formData.description} />
      )}
    </>
  );
};

export default CreatePost;
