import { Box } from '@chakra-ui/react';
import Stories from 'react-insta-stories';

import { useReelsContext } from '~/lib/contexts/ReelsContext';

import ReelRenderer from './ReelRenderer';

export default function InstaStoryReels() {
  const { reels, setShowReel } = useReelsContext();
  return (
    <Box position="fixed" inset="0 0 0 0" w="100vw" h="100vh">
      <Stories
        stories={reels.map((reel) => ({
          ...reel,
          content: ReelRenderer,
          // seeMoreCollapsed: customCollapsedComponent,
        }))}
        defaultInterval={5500}
        width="100%"
        height="100%"
        onAllStoriesEnd={() => setShowReel(false)}
      />
    </Box>
  );
}
