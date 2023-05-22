import { Box } from '@chakra-ui/react';
import Stories from 'react-insta-stories';

import { useReelsContext } from '~/lib/contexts/ReelsContext';

export default function InstaStoryReels() {
  const { reels } = useReelsContext();
  return (
    <Box position="absolute" w="100vw" h="100vh">
      <Stories
        stories={reels}
        defaultInterval={1500}
        width="100%"
        height="100%"
      />
    </Box>
  );
}
