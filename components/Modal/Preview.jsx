import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

const Preview = ({ content, setShow }) => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll("pre code").forEach((block) => {
        block.classList.add("line-numbers");
      });
      Prism.highlightAll();
    }, navigator.connection.rtt * 10);
  }, []);

  return (
    <>
      <div className="center-100" style={{ zIndex: 9990 }}>
        <div className="__post-preview">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeRaw, rehypeKatex]}
          >
            {content}
          </ReactMarkdown>
          <button className="btn" onClick={() => setShow(false)}>
            Đóng
          </button>
        </div>
      </div>
    </>
  );
};

export default Preview;
