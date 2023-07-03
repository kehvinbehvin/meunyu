import { Flex } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import NavBar from '~/lib/components/common/NavBar';
import StoryComponent from '~/lib/components/journey/story';

export default function Story() {
  return (
    <Flex flexDir="column">
      <NextSeo title="Our Story" />
      <NavBar />
      <StoryComponent />
    </Flex>
  );
}
