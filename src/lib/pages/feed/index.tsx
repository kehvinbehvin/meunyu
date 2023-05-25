import { Flex } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import NavBar from '~/lib/components/common/NavBar';
import FeedCard from '~/lib/components/event-feed/FeedCard';
import UploadPhoto from '~/lib/components/event-feed/UploadPhoto';
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
      <UploadPhoto />
    </Flex>
  );
}
