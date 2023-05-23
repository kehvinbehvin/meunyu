import { Flex, Text } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import InstaStoryReels from '~/lib/components/event-reel/InstaStoryReels';
import ReelHeader from '~/lib/components/event-reel/ReelHeader';
import { useReelsContext } from '~/lib/contexts/ReelsContext';

const Home = () => {
  const { showReel } = useReelsContext();
  return (
    <Flex flexDir="column">
      <NextSeo title="Home" />
      <Text>Welcome, guest</Text>
      <ReelHeader />
      {showReel && <InstaStoryReels />}
    </Flex>
  );
};

export default Home;
