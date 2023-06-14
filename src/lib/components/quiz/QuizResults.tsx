import { Box, Text } from '@chakra-ui/react';

export default function QuizResults({ score }: { score: number }) {
  return (
    <Box my={9}>
      <Text fontSize="2xl" textAlign="center">
        Congratulations
      </Text>
      <Text fontSize="5xl" textAlign="center" my={3}>
        {score}%
      </Text>
      <Text fontSize="lg" textAlign="center">
        You are doing well!
      </Text>
    </Box>
  );
}
