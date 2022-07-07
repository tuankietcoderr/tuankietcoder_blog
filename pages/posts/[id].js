import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import { useEffect, useState } from "react";
import { Heart, Share } from "react-bootstrap-icons";
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

//! WARNING

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
