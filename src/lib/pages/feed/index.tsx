import { Flex } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import NavBar from '~/lib/components/common/NavBar';
import EventFeed from '~/lib/components/event-feed';

export default function Feed() {
  return (
    <Flex flexDir="column">
      <NextSeo title="Home" />
      <NavBar />
      <EventFeed />
    </Flex>
  );
}
