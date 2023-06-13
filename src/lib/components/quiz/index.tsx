import { useState } from 'react';

import QuestionBank from '~/lib/contexts/QuizQuestions.json';

import QuestionTemplate from './QuestionTemplate';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const goNextQuestion = () => setCurrentQuestion(currentQuestion + 1);

  return (
    <QuestionTemplate
      question={QuestionBank[currentQuestion].question}
      options={QuestionBank[currentQuestion].options}
      goNextQuestion={goNextQuestion}
    />
  );
}
