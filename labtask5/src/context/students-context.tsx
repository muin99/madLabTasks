import { createContext, ReactNode, useContext, useReducer } from "react";

import { STUDENTS } from "../data/students";
import { StudentsAction, StudentsState, studentsReducer } from "./students-reducer";

interface StudentsContextValue {
  students: StudentsState;
  dispatch: React.Dispatch<StudentsAction>;
}

const StudentsContext = createContext<StudentsContextValue | null>(null);

interface StudentsProviderProps {
  children: ReactNode;
}

export function StudentsProvider({ children }: StudentsProviderProps) {
  const [students, dispatch] = useReducer(studentsReducer, STUDENTS);

  return (
    <StudentsContext.Provider value={{ students, dispatch }}>
      {children}
    </StudentsContext.Provider>
  );
}

export function useStudents(): StudentsContextValue {
  const context = useContext(StudentsContext);
  if (!context) {
    throw new Error("useStudents must be used inside a StudentsProvider");
  }
  return context;
}
