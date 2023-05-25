import { Flex, Icon } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { GrAdd } from 'react-icons/gr';

import NavBar from '~/lib/components/common/NavBar';
import FeedCard from '~/lib/components/event-feed/FeedCard';
import { useReelsContext } from '~/lib/contexts/ReelsContext';

export default function Feed() {
  const { reels } = useReelsContext();

  return (
    <Flex flexDir="column">
      <NextSeo title="Home" />
      <NavBar />
      {reels.map((reel) => (
        <FeedCard reel={reel} />
      ))}
      <Flex
        position="fixed"
        right={5}
        bottom="10%"
        w="20px"
        h="20px"
        bg="red.500"
        borderRadius="500px"
        p={5}
        alignItems="center"
        justifyContent="center"
        fontWeight="extrabold"
      >
        <Icon as={GrAdd} />
      </Flex>
    </Flex>
  );
}
