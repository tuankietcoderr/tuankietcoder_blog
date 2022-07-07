import { useContext } from "react";
import { Exercise, Loading } from "../../components";
import { ExerciseContext } from "../../contexts/ExerciseContext";

const Exercises = () => {
  const { exercises } = useContext(ExerciseContext);
  if (!exercises) return <Loading />;
  console.log(exercises);
  return (
    <>
      {exercises.map((exercise) => (
        <Exercise key={exercise._id} {...exercise} />
      ))}
    </>
  );
};

export default Exercises;
