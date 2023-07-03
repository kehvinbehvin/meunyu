import { Box } from '@chakra-ui/react';

import FramerFadeIn from '../common/FramerFadeIn';
import { useFeedContext } from '~/lib/contexts/FeedContext';

import FeedCard from './FeedCard';
import UploadPhoto from './UploadPhoto';

export default function EventFeed() {
  const { feed } = useFeedContext();
  return (
    <Box>
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
