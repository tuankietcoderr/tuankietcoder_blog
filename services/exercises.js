import axios from "axios";

const getExercises = async () => {
  const { data } = await axios
    .get("/api/exercises")
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return data;
};

const getExerciseByID = async (id) => {
  const { data } = await axios
    .get(`/api/exercises/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return data;
};

const createExercise = async (form) => {
  const { data } = await axios
    .post("/api/exercises", form)
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return data;
};

const updateExercise = async (id, form) => {
  const { data } = await axios
    .put(`/api/exercises/${id}`, form)
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return data;
};

const deletePost = async (id) => {
  await axios
    .delete(`/api/exercises/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

const getExerciseByCategory = (exercises, categories) => {
  const result = [];
  categories.map(({ slug }) => {
    result.push({
      slug,
      posts: exercises.filter((exercise) => exercise.category.includes(slug)),
    });
  });
  return result;
};

export {
  getExercises,
  getExerciseByID,
  createExercise,
  updateExercise,
  deletePost,
  getExerciseByCategory,
};
