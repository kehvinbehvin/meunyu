import { Flex, Text } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import InstaStoryReels from '~/lib/components/event-reel/InstaStoryReels';
import ReelHeader from '~/lib/components/event-reel/ReelHeader';

const Home = () => {
  return (
    <Flex flexDir="column">
      <NextSeo title="Home" />
      <Text>Welcome, guest</Text>
      <ReelHeader />
      {/* <InstaStoryReels /> */}
    </Flex>
  );
};

export default Home;
