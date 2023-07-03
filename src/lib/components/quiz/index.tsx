import { Box, Heading, Text } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import QuestionBank from '~/lib/contexts/QuizQuestions.json';

import QuestionTemplate from './QuestionTemplate';
import QuizResults from './QuizResults';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const goNextQuestion = () => setCurrentQuestion(currentQuestion + 1);

  return (
    <Box color="brand.300" textAlign="center" my={9}>
      <Heading textTransform="uppercase" fontWeight="light" fontSize="2xl">
        Two truths, one lie
      </Heading>
      <Text fontSize="sm">Guess the lie</Text>
      <AnimatePresence>
        {QuestionBank.length === currentQuestion ? (
          <QuizResults score={Math.round((score * 100) / currentQuestion)} />
        ) : (
          <Box
            as={motion.div}
            initial={{ transform: 'translateX(100%)' }}
            animate={{ transform: 'translateX(0)' }}
            exit={{ transform: 'translateX(-100%)' }}
            key={currentQuestion}
            position="absolute"
            w="90vw"
          >
            <QuestionTemplate
              explanation={QuestionBank[currentQuestion].explanation}
              options={QuestionBank[currentQuestion].options}
              goNextQuestion={goNextQuestion}
              setScore={setScore}
            />
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
}
