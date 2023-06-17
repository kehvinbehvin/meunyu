import { Box, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

import PrimaryButton from '../common/PrimaryButton';

export default function QuizResults({ score }: { score: number }) {
  return (
    <Box my={9} textAlign="center">
      <Text fontSize="sm" color="white" textAlign="center" my={3}>
        Your score
      </Text>
      <Text fontSize="lg" color="white" textAlign="center" my={3}>
        {score}%
      </Text>
      <Link href="/journey">
        <PrimaryButton>Back</PrimaryButton>
      </Link>
    </Box>
  );
}
