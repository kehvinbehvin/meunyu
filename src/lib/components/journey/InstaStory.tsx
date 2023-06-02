import { Box } from '@chakra-ui/react';
import type { Dispatch, SetStateAction } from 'react';
import Stories from 'react-insta-stories';
import type { Story } from 'react-insta-stories/dist/interfaces';

import ReelRenderer from './ReelRenderer';

export default function InstaStory({
  stories,
  setShowReels,
}: {
  stories: Story[];
  setShowReels: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Box position="fixed" inset="0 0 0 0" w="100vw" h="100vh" zIndex={1}>
      <Stories
        stories={stories.map((reel) => ({
          ...reel,
          content: ReelRenderer,
        }))}
        defaultInterval={5500}
        width="100%"
        height="100%"
        onAllStoriesEnd={() => setShowReels(false)}
      />
    </Box>
  );
}
