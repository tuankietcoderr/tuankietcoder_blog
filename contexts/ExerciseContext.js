import { createContext, useState, useEffect } from "react";
import { getExercises } from "../services/exercises";

export const ExerciseContext = createContext();

export const ExerciseContextProvider = ({ children }) => {
  const [exercises, setExercises] = useState(null);

  useEffect(() => {
    getExercises().then((res) => {
      setExercises(res.reverse());
    });
  }, []);

  const value = {
    exercises,
  };
  return (
    <ExerciseContext.Provider value={value}>
      {children}
    </ExerciseContext.Provider>
  );
};
