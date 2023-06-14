import { Box, Button, Flex, Text } from '@chakra-ui/react';
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

type OptionType = {
  value: string;
  answer: boolean;
};

export default function QuestionTemplate({
  question,
  options,
  goNextQuestion,
  setScore,
}: {
  question: string;
  options: OptionType[];
  goNextQuestion: () => void;
  setScore: Dispatch<SetStateAction<number>>;
}) {
  const [selection, setSelection] = useState<OptionType>({
    value: '',
    answer: false,
  });
  const [hasAnswered, setHasAnswered] = useState(false);

  const reset = () => {
    setSelection({ value: '', answer: false });
    setHasAnswered(false);
  };
  return (
    <Box>
      <Text>{question}</Text>
      <Flex flexDir="column">
        {options.map(({ value, answer }) => {
          let border = '1px solid black';
          if (!hasAnswered && selection.value === value) {
            border = '2px solid black';
          }
          if (hasAnswered && !answer && selection.value === value) {
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
              onClick={() => !hasAnswered && setSelection({ value, answer })}
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
          <Button
            mx="auto"
            onClick={() => {
              setHasAnswered(true);
              setScore((score) => {
                if (selection.answer) return score + 1;
                return score;
              });
            }}
          >
            Submit
          </Button>
        )}
      </Flex>
    </Box>
  );
}
