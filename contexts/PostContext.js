import { createContext, useEffect, useState } from "react";
import { getCategories } from "../services/categories";
import {
  getPosts,
  getPostsByCategory,
  getRecentPosts,
} from "../services/posts";

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
  }, []);
  const value = {
    posts,
    categories,
    categoryPosts,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
