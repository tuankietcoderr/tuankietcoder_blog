import { useState } from "react";

const ExerciseManager = ({ exercises }) => {
  const [createExerciseModal, setCreateExerciseModal] = useState(false);
  return (
    <>
      <div className="d-flex space-between">
        <h1>Bài tập</h1>
        <div className="center">
          <button className="btn" style={{ height: "fit-content" }}>
            Tạo
          </button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Like</th>
            <th>Dislike</th>
            <th>Share</th>
            <th>View</th>
            <th>Download</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {exercises.lengh !== 0 ? (
            exercises.map((exercise, index) => (
              <tr key={exercise._id}>
                <td>{index + 1}</td>
                <td>{exercise.title}</td>
                <td>{exercise.likes}</td>
                <td>{exercise.dislikes}</td>
                <td>{exercise.shares}</td>
                <td>{exercise.views}</td>
                <td>{exercise.downloads}</td>
                <td>
                  <div className="d-flex" style={{ gap: 10 }}>
                    <button className="btn" style={{ backgroundColor: "blue" }}>
                      Edit
                    </button>
                    <button className="btn" style={{ backgroundColor: "red" }}>
                      Del
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8} style={{ textAlign: "center" }}>
                Không có bài tập nào
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default ExerciseManager;
