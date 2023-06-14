import { Box, Button, Text } from '@chakra-ui/react';
import Link from 'next/link';

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
      <Link href="/journey">
        <Button>Back</Button>
      </Link>
    </Box>
  );
}
