import { Navbar } from "../components";
import { ExerciseContextProvider } from "../contexts/ExerciseContext";
import { PostContextProvider } from "../contexts/PostContext";
import "../styles/button.css";
import "../styles/category.css";
import "../styles/globals.css";
import "../styles/nav.css";
import "../styles/post.css";
import "../styles/root.css";
import "../styles/comment.css";

function MyApp({ Component, pageProps }) {
  return (
    <PostContextProvider>
      <ExerciseContextProvider>
        <Navbar />
        <Component {...pageProps} />
      </ExerciseContextProvider>
    </PostContextProvider>
  );
}

export default MyApp;
