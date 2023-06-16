import { Box, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

import PrimaryButton from '../common/PrimaryButton';

export default function QuizResults({ score }: { score: number }) {
  return (
    <Box my={9} textAlign="center">
      <Heading
        textTransform="uppercase"
        color="brand.300"
        fontWeight="light"
        fontSize="2xl"
      >
        Two truths, one lie
      </Heading>
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
