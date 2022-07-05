import { createContext, useEffect, useState } from "react";
import { getCategories } from "../services/categories";
import { getPosts, getRecentPosts } from "../services/posts";

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    getPosts().then((data) => setPosts(data));
    getCategories().then((data) => setCategories(data));
  }, []);
  const value = {
    posts,
    categories,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
