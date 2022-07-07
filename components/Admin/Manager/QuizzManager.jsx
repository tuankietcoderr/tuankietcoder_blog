import { useState } from "react";

const QuizzManager = () => {
  const [createQuizzModal, setCreateQuizzModal] = useState(false);
  return (
    <>
      <div className="d-flex space-between">
        <h1>Quizz</h1>
        <div className="center">
          <button className="btn" style={{ height: "fit-content" }}>
            Tạo
          </button>
        </div>
      </div>
    </>
  );
};

export default QuizzManager;
