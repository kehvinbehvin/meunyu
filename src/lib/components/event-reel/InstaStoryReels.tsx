import { Box } from '@chakra-ui/react';
import Stories from 'react-insta-stories';

import { useReelsContext } from '~/lib/contexts/ReelsContext';

export default function InstaStoryReels() {
  const { reels, setShowReel } = useReelsContext();
  return (
    <Box position="fixed" inset="0 0 0 0" w="100vw" h="100vh">
      <Stories
        stories={reels}
        defaultInterval={1500}
        width="100%"
        height="100%"
        onAllStoriesEnd={() => setShowReel(false)}
      />
    </Box>
  );
}
