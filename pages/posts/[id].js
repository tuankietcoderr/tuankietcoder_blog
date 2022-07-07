import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import { useEffect, useState } from "react";
import { ChatLeftDots, Heart, Share } from "react-bootstrap-icons";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Categories,
  CommentForm,
  Comments,
  Loading,
  RecentPosts,
  RelatedPosts,
} from "../../components";
import { getPostByID } from "../../services/posts";

const PostDetail = () => {
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);
  useEffect(() => {
    if (router.isReady) {
      getPostByID(router.query.id).then((res) => {
        setPost(res);
        setComments(res.comments);
      });
    }
    setTimeout(() => {
      document.querySelectorAll("pre code").forEach((block) => {
        block.classList.add("line-numbers");
      });
      document.querySelectorAll("pre code").forEach((block) => {
        const btn = document.createElement("button");
        btn.className = "btn";
        btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
      </svg> Copy`;
        btn.style.position = "absolute";
        btn.style.top = "0";
        btn.style.right = "0";
        btn.style.padding = "5px 10px";
        btn.style.border = "none";
        block.parentElement.appendChild(btn);
        btn.addEventListener("click", () => {
          btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
        </svg> Copied`;
          btn.style.color = "lightgreen";
          navigator.clipboard.writeText(block.innerText);
        });
      });

      Prism.highlightAll();
    }, navigator.connection.rtt * 10 + 1000);
    console.log("rtt", navigator.connection.rtt);
  }, [router.isReady, router.query.id]);
  // console.log(post);
  if (!post) return <Loading />;
  return (
    <>
      <div className="d-flex" style={{ gap: 16 }}>
        <div className="__post-lcs">
          <div className="center">
            <Heart />
            <span style={{ fontSize: 16 }}>{post.likes}</span>
          </div>
          <a href="#comment">
            <div className="center">
              <ChatLeftDots />
              <span style={{ fontSize: 16 }}>{post.comments.length}</span>
            </div>
          </a>
          <div className="center">
            <Share />
            <span style={{ fontSize: 16 }}>{post.shares}</span>
          </div>
        </div>
        <main>
          <div>
            <div className="__post-thumbnail">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post._postImg} alt={post.title} />
              <div className="__post-thumbnail-overlay" />
              <h1
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 0,
                  width: "100%",
                  color: "white",
                  justifyContent: "center",
                  display: "flex",
                  padding: "0 1rem",
                }}
              >
                {post.title}
              </h1>
              <div
                className="d-flex row-reverse space-between"
                style={{
                  color: "#fff",
                  position: "absolute",
                  top: 10,
                  right: 10,
                  left: 10,
                }}
              >
                <cite
                  style={{
                    fontSize: 12,
                    backgroundColor: "#000",
                    borderRadius: 5,
                    padding: "0.5rem",
                  }}
                  className="center"
                >
                  Đăng lúc:{" "}
                  {moment(post.createdAt).format("DD/MM/YYYY hh:mm A")}
                </cite>
              </div>
            </div>
            <article className="__post-content">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.description}
              </ReactMarkdown>
            </article>
            <div className="d-flex" style={{ gap: 10 }}>
              <div className="center">
                <b>Danh mục:</b>
              </div>
              <div
                className="__post-tags d-flex"
                style={{ flexWrap: "wrap", gap: 10 }}
              >
                {post.category.map((category) => (
                  <Link
                    key={category}
                    href={`/categories/${category}`}
                    passHref
                  >
                    <a>
                      <div
                        style={{
                          padding: "0.1rem 0.25rem",
                          backgroundColor: "#fff",
                          borderRadius: 5,
                          border: "1px solid #000",
                        }}
                        key={category}
                      >
                        {category}
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <CommentForm {...post} setComments={setComments} />
              <Comments comments={comments} />
            </div>
          </div>
          <div className="__post-rcs">
            <Categories />
            <RecentPosts id={post._id} />
            <RelatedPosts categories={post.category} id={post._id} />
          </div>
        </main>
      </div>
    </>
  );
};

export default PostDetail;
