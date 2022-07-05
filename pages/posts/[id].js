import moment from "moment";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Categories,
  Loading,
  RecentPosts,
  RelatedPosts,
} from "../../components";
import { getPostByID } from "../../services/posts";

const PostDetail = () => {
  const router = useRouter();
  const [post, setPost] = useState(null);
  useEffect(() => {
    if (router.isReady) {
      getPostByID(router.query.id).then((res) => setPost(res));
    }
  }, [router.isReady, router.query.id]);
  console.log(post);
  if (!post) return <Loading />;
  return (
    <>
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
                Đăng lúc: {moment(post.createdAt).format("DD/MM/YYYY hh:mm A")}
              </cite>
            </div>
          </div>
          <article className="__post-content">{post.description}</article>
        </div>
        <div>
          <Categories />
          <RecentPosts id={post._id} />
          <RelatedPosts categories={post.category} />
        </div>
      </main>
    </>
  );
};

export default PostDetail;
