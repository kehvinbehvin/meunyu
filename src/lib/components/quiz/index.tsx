import { useState } from 'react';

import QuestionBank from '~/lib/contexts/QuizQuestions.json';

import QuestionTemplate from './QuestionTemplate';
import QuizResults from './QuizResults';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const goNextQuestion = () => setCurrentQuestion(currentQuestion + 1);

  return QuestionBank.length === currentQuestion ? (
    <QuizResults score={Math.round((score * 100) / currentQuestion)} />
  ) : (
    <QuestionTemplate
      explanation={QuestionBank[currentQuestion].explanation}
      options={QuestionBank[currentQuestion].options}
      goNextQuestion={goNextQuestion}
      setScore={setScore}
    />
  );
}
