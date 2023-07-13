import { Box, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useMemo } from 'react';

import PrimaryButton from '../common/PrimaryButton';
import quiz0 from '~/assets/quiz/quiz-0.jpeg';
import quiz100 from '~/assets/quiz/quiz-100.jpeg';
import quiz50 from '~/assets/quiz/quiz-50.jpeg';

export default function QuizResults({ score }: { score: number }) {
  const imageSrc = useMemo(() => {
    switch (score) {
      case 0:
        return quiz0.src;
      case 50:
        return quiz50.src;
      case 100:
        return quiz100.src;
      default:
        return quiz100.src;
    }
  }, [score]);
  return (
    <Box my={5} textAlign="center">
      <Image src={imageSrc} my={9} borderRadius={4} />
      <Text>Your score</Text>
      <Text fontSize="5xl" color="white" textAlign="center" my={3}>
        {score}%
      </Text>
      <Link href="/journey">
        <PrimaryButton>Back</PrimaryButton>
      </Link>
    </Box>
  );
}
