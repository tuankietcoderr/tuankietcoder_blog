import moment from "moment";
import Link from "next/link";
import { ChatLeftDots, Heart, Share } from "react-bootstrap-icons";

const Post = ({
  category,
  createdAt,
  description,
  likes,
  dislikes,
  shares,
  title,
  comments,
  _postImg,
  _id,
}) => {
  return (
    <>
      <Link href={`/posts/${_id}`} passHref>
        <a>
          <div className="__post-box">
            <div className="__post-box-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={_postImg || _exerciseImg} alt={title} />
            </div>
            <div className="__post-box-info">
              <div className="d-flex space-between column">
                <div>
                  <div className="__post-box-info-title">{title}</div>
                </div>
                <div className="d-flex row-reverse space-between __post-box-info-description-social">
                  <div className="d-flex" style={{ gap: "1rem" }}>
                    <span>
                      <Heart /> {likes}
                    </span>
                    <span>
                      <ChatLeftDots /> {comments.length || 0}
                    </span>
                    <span>
                      <Share /> {shares}
                    </span>
                  </div>
                  <cite
                    style={{ opacity: 0.7, paddingLeft: "1rem", fontSize: 14 }}
                  >
                    Đăng lúc: {moment(createdAt).format("DD/MM/YYYY hh:mm A")}
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default Post;
