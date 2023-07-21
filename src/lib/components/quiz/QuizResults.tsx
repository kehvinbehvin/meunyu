import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';

import PrimaryButton from '../common/PrimaryButton';
import { useAppContext } from '~/lib/contexts/AppContext';
import { appCopy } from '~/lib/contexts/AppCopy';

export default function QuizResults({ score }: { score: number }) {
  const { yourScore } = appCopy.journey.navigation.quiz;
  const { back } = appCopy.common;
  const { language } = useAppContext();
  return (
    <Box my={9} textAlign="center">
      <Text fontSize="sm" color="white" textAlign="center" my={3}>
        {yourScore[language]}
      </Text>
      <Text fontSize="lg" color="white" textAlign="center" my={3}>
        {score}%
      </Text>
      <Link href="/journey">
        <PrimaryButton>{back[language]}</PrimaryButton>
      </Link>
    </Box>
  );
}
