/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

// Define the type for your context data
type QuizContextType = {
};


// Create the context
const QuizContext = createContext({} as QuizContextType);

// Create a provider component
const QuizContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentScore, setCurrentScore] = useState(0);
  


  return (
    <QuizContext.Provider value={{  }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuizContext = () => {
  return useContext(QuizContext);
};

export { QuizContextProvider, useQuizContext };
