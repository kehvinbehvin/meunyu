import { Flex } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import NavBar from '~/lib/components/common/NavBar';
import Quiz from '~/lib/components/quiz';

function QuizPage() {
  return (
    <Flex flexDir="column">
      <NextSeo title="Two truth one lie" />
      <Quiz />
      <NavBar />
    </Flex>
  );
}

export default QuizPage;
