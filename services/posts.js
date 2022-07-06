import axios from "axios";

const getPosts = async () => {
  const { data } = await axios
    .get("/api/posts")
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return data;
};

const getPostByID = async (id) => {
  const { data } = await axios
    .get(`/api/posts/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return data;
};

const createPost = async (form) => {
  const { data } = await axios
    .post("/api/posts", form)
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return data;
};

const updatePost = async (id, form) => {
  const { data } = await axios
    .put(`/api/posts/${id}`, form)
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return data;
};

const deletePost = async (id) => {
  await axios
    .delete(`/api/posts/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

const checkIncludes = (categoriesOne, categoriesTwo) => {
  return categoriesOne.some((category) => categoriesTwo.includes(category));
};

const getPostsByCategory = (posts, categories) => {
  const result = [];
  categories.map(({ slug }) => {
    result.push({
      slug,
      posts: posts.filter((post) => post.category.includes(slug)),
    });
  });
  return result;
};

const getRelatedPosts = (categories, posts) => {
  const result = posts.filter((post) =>
    checkIncludes(categories, post.category)
  );
  result.splice(5);
  return result;
};

const getRecentPosts = (posts) => {
  const result = posts.slice(0, 5);
  return result;
};

export {
  getPosts,
  getPostByID,
  createPost,
  updatePost,
  deletePost,
  getRelatedPosts,
  getRecentPosts,
  getPostsByCategory,
};
