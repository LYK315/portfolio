// QuestionContext.tsx
import { createContext, useState, useContext, ReactNode } from 'react';

interface IQuestionContext {
  openQuestion: boolean;
  setOpenQuestion: (open: boolean) => void;

  questionCount: number;
  setQuestionCount: (count: number) => void;

  incrementQuestionCount: () => void;
  closeQuestion: () => void;
}

// Define the shape of Context
const QuestionContext = createContext<IQuestionContext | undefined>(undefined);

// Context Wrapper(provider) that manage State and Update Value or Function to its Children
function QuestionProvider({ children }: { children: ReactNode }) {
  const [openQuestion, setOpenQuestion] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);

  // Track how many time ball is clicked
  function incrementQuestionCount() {
    setQuestionCount(prevCount => {
      const newCount = prevCount + 1;
      return newCount === 3 ? 0 : newCount;
    });
  }

  // Close Question Board
  function closeQuestion() {
    setOpenQuestion(false);
  }

  // Return the Context Wrapper
  return (
    <QuestionContext.Provider
      value={{
        openQuestion, setOpenQuestion,
        questionCount, setQuestionCount,
        incrementQuestionCount,
        closeQuestion,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}

// Define Hook that provides type-safe way to use the Context
function useQuestion(): IQuestionContext {
  const context = useContext(QuestionContext);
  if (context === undefined) {
    throw new Error('useQuestion must be used within a QuestionProvider');
  }
  return context;
}

// Export Context Wrapper and Hook
export { QuestionProvider, useQuestion };