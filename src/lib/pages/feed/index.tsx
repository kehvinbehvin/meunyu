import { Flex } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import LoaderScreen from '~/lib/components/common/LoaderScreen';
import NavBar from '~/lib/components/common/NavBar';
import EventFeed from '~/lib/components/event-feed';

export default function Feed() {
  return (
    <Flex flexDir="column">
      <NextSeo title="Home" />
      <LoaderScreen />
      <NavBar />
      <EventFeed />
    </Flex>
  );
}
