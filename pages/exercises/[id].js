import moment from "moment";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getExerciseByID } from "../../services/exercises";
import { Loading, DownloadFile } from "../../components";

const Exercise = () => {
  const router = useRouter();
  const [exercise, setExercise] = useState(null);
  useEffect(() => {
    if (router.isReady) {
      getExerciseByID(router.query.id).then((res) => setExercise(res));
    }
  }, [router.isReady, router.query.id]);
  if (!exercise) return <Loading />;
  return (
    <>
      <div>
        <div className="__post-thumbnail">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={exercise._exerciseImg} alt={exercise.title} />
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
            {exercise.title}
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
              {moment(exercise.createdAt).format("DD/MM/YYYY hh:mm A")}
            </cite>
          </div>
        </div>
        <article className="__post-content">{exercise.description}</article>
        <DownloadFile file={exercise.fileUrl} />
      </div>
    </>
  );
};

export default Exercise;
