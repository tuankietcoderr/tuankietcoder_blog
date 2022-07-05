import axios from "axios";

const getCategories = async () => {
  const { data } = await axios.get("/api/categories").then((res) => res.data);
  return data;
};

const createCategory = async (form) => {
  const { data } = await axios
    .post("/api/categories", form)
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return data;
};

const updateCategory = async (slug, form) => {
  await axios
    .put(`/api/categories/${slug}`, form)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

const deleteCategory = async (slug) => {
  await axios
    .delete(`/api/categories/${slug}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export { getCategories, createCategory, updateCategory, deleteCategory };
