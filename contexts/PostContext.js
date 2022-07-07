import { createContext, useEffect, useState } from "react";
import { getCategories } from "../services/categories";
import { getPosts, getPostsByCategory } from "../services/posts";

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [categoryPosts, setCategoryPosts] = useState(null);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data.reverse());
      getCategories().then((res) => {
        setCategories(res);
        setCategoryPosts(getPostsByCategory(data, res));
      });
    });
  }, [setPosts, setCategories, setCategoryPosts]);

  const value = {
    posts,
    categories,
    categoryPosts,
    setPosts,
    setCategories,
    setCategoryPosts,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
