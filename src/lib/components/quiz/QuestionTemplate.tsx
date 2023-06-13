import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

export default function QuestionTemplate({
  question,
  options,
  goNextQuestion,
}: {
  question: string;
  options: { value: string; answer: boolean }[];
  goNextQuestion: () => void;
}) {
  const [selection, setSelection] = useState('');
  const [hasAnswered, setHasAnswered] = useState(false);

  const reset = () => {
    setSelection('');
    setHasAnswered(false);
  };
  return (
    <Box>
      <Text>{question}</Text>
      <Flex flexDir="column">
        {options.map(({ value, answer }) => {
          let border = '1px solid black';
          if (!hasAnswered && selection === value) {
            border = '2px solid black';
          }
          if (hasAnswered && !answer && selection === value) {
            border = '2px solid red';
          }
          if (hasAnswered && answer) {
            border = '2px solid green';
          }
          return (
            <Box
              w="100%"
              p={3}
              border={border}
              borderRadius="4px"
              my={3}
              onClick={() => !hasAnswered && setSelection(value)}
            >
              <Text>{value}</Text>
            </Box>
          );
        })}
      </Flex>
      <Flex w="100%" alignItems="center" justifyContent="center">
        {hasAnswered ? (
          <Button
            mx="auto"
            onClick={() => {
              goNextQuestion();
              reset();
            }}
          >
            Next
          </Button>
        ) : (
          <Button mx="auto" onClick={() => setHasAnswered(true)}>
            Submit
          </Button>
        )}
      </Flex>
    </Box>
  );
}
