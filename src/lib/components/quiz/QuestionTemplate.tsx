import { Box, Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

import PrimaryButton from '../common/PrimaryButton';

type OptionType = {
  value: string;
  answer: boolean;
};

export default function QuestionTemplate({
  explanation,
  options,
  goNextQuestion,
  setScore,
}: {
  explanation: string;
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
    <Box
      as={motion.div}
      textAlign="center"
      color="brand.300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Flex flexDir="column" mt={5}>
        {options.map(({ value, answer }) => {
          let styles = {};
          if (!hasAnswered && selection.value === value) {
            styles = { boxShadow: 'xl', transform: 'scale(1.01)' };
          }
          if (hasAnswered && !answer && selection.value === value) {
            styles = { bgColor: '#C8745E', outlineColor: '#C8745E' };
          }
          if (hasAnswered && answer) {
            styles = { bgColor: 'brand.200', outlineColor: 'brand.200' };
          }
          return (
            <Box
              w="100%"
              transition="all 100ms ease-in-out"
              p={3}
              outline="1px solid"
              outlineColor="brand.200"
              {...styles}
              borderRadius="4px"
              my={3}
              onClick={() => !hasAnswered && setSelection({ value, answer })}
            >
              <Text>{value}</Text>
            </Box>
          );
        })}
      </Flex>
      {hasAnswered && (
        <Box>
          <Text>{explanation}</Text>
        </Box>
      )}
      <Flex w="100%" alignItems="center" justifyContent="end" mt={9}>
        {hasAnswered ? (
          <PrimaryButton
            mx="auto"
            mr={0}
            onClick={() => {
              goNextQuestion();
              reset();
            }}
          >
            Next
          </PrimaryButton>
        ) : (
          <PrimaryButton
            mx="auto"
            mr={0}
            onClick={() => {
              setHasAnswered(true);
              setScore((score) => {
                if (selection.answer) return score + 1;
                return score;
              });
            }}
          >
            Submit
          </PrimaryButton>
        )}
      </Flex>
    </Box>
  );
}
