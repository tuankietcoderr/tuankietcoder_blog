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
import "katex/dist/katex.min.css";

//! Syntax highlighter
import "prismjs/components/prism-markup-templating.js";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-go";
import "prismjs/components/prism-php";
import "prismjs/components/prism-java";

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
