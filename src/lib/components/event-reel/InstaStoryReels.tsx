import { Box } from '@chakra-ui/react';
import Stories from 'react-insta-stories';

export default function InstaStoryReels() {
  const stories = [
    { url: 'https://picsum.photos/1000/1000?random=1' },
    { url: 'https://picsum.photos/1000/1000?random=2' },
    { url: 'https://picsum.photos/1000/1000?random=3' },
    { url: 'https://picsum.photos/1000/1000?random=4' },
    { url: 'https://picsum.photos/1000/1000?random=5' },
  ];
  return (
    <Box position="absolute" w="100vw" h="100vh">
      <Stories
        stories={stories}
        defaultInterval={1500}
        width="100%"
        height="100%"
      />
    </Box>
  );
}
