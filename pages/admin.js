import { useEffect, useState, useContext } from "react";
import { AdminActionPage, Loading } from "../components";
import { PostContext } from "../contexts/PostContext";
import { ExerciseContext } from "../contexts/ExerciseContext";

const Admin = ({ adminRights }) => {
  const {
    categories,
    posts,
    categoryPosts,
    setPosts,
    setCategories,
    setCategoryPosts,
  } = useContext(PostContext);
  const { exercises } = useContext(ExerciseContext);
  if (!exercises || !posts || !categories) return <Loading />;
  return (
    <>
      {!adminRights ? (
        <h1>Bạn không có quyền truy cập vào trang này...</h1>
      ) : (
        <AdminActionPage
          categories={categories}
          posts={posts}
          exercises={exercises}
          categoryPosts={categoryPosts}
          setPosts={setPosts}
          setCategories={setCategories}
          setCategoryPosts={setCategoryPosts}
        />
      )}
    </>
  );
};

export default Admin;

export const getServerSideProps = async (ctx) => {
  const {
    query: { username, password },
  } = ctx;
  const adminRights =
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD;
  return {
    props: {
      adminRights,
    },
  };
};
