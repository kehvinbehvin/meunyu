import { Box, Heading, Text } from '@chakra-ui/react';

import FramerFadeIn from '../common/FramerFadeIn';
import { useAppContext } from '~/lib/contexts/AppContext';
import { appCopy } from '~/lib/contexts/AppCopy';
import { useFeedContext } from '~/lib/contexts/FeedContext';

import FeedCard from './FeedCard';
import UploadPhoto from './UploadPhoto';

export default function EventFeed() {
  const { feed } = useFeedContext();
  const { language } = useAppContext();
  const { header, subtext } = appCopy.feed.title;
  return (
    <Box>
      <Heading color="white" textAlign="center" textTransform="uppercase">
        {header[language]}
      </Heading>
      <Text color="white" textAlign="center" fontSize="xs" mb={3}>
        {subtext[language]}
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
