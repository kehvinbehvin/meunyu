import { Box, Heading, Text } from '@chakra-ui/react';

import FramerFadeIn from '../common/FramerFadeIn';
import { useFeedContext } from '~/lib/contexts/FeedContext';

import FeedCard from './FeedCard';
import UploadPhoto from './UploadPhoto';

export default function EventFeed() {
  const { feed } = useFeedContext();
  return (
    <Box>
      <Heading color="white" textAlign="center" textTransform="uppercase">
        Photo wall
      </Heading>
      <Text color="white" textAlign="center" fontSize="xs" mb={3}>
        View and upload cherished moments from the couple from family & friends
      </Text>
      <FramerFadeIn>
        {feed &&
          feed.map((feedItem) => (
            <FeedCard key={feedItem.created_at} feed={feedItem} />
          ))}
      </FramerFadeIn>

      <UploadPhoto />
    </Box>
  );
}
