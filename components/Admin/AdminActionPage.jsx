import {
  PostManager,
  CategoryManager,
  ExerciseManager,
  QuizzManager,
} from "./Manager";

const AdminActionPage = ({
  exercises,
  posts,
  categories,
  categoryPosts,
  setPosts,
  setCategories,
  setCategoryPosts,
}) => {
  return (
    <>
      <PostManager posts={posts} setPosts={setPosts} />
      <CategoryManager
        categories={categories}
        setCategories={setCategories}
        categoryPosts={categoryPosts}
        setCategoryPosts={setCategoryPosts}
      />
      <ExerciseManager exercises={exercises} />
      <QuizzManager />
    </>
  );
};

export default AdminActionPage;
