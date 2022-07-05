import { PostContextProvider } from "../contexts/PostContext";
import "../styles/globals.css";
import "../styles/root.css";
import "../styles/button.css";
import "../styles/nav.css";
import { Navbar } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <PostContextProvider>
      <Navbar />
      <Component {...pageProps} />
    </PostContextProvider>
  );
}

export default MyApp;
