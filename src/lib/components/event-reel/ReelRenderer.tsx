import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import type {
  Renderer,
  Story,
  Action,
} from 'react-insta-stories/dist/interfaces';

const ReelRenderer: Renderer = ({
  action,
  story,
}: {
  action: Action;
  story: Story;
}) => {
  const [hasImageLoaded, setHasImageLoaded] = useState(false);
  useEffect(() => {
    if (hasImageLoaded) action('play');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasImageLoaded]);
  return (
    <Box>
      <Image src={story.url} onLoad={() => setHasImageLoaded(true)} />
      <Box
        position="absolute"
        bottom={0}
        h="20vh"
        w="100%"
        px={5}
        py={3}
        bgColor="rgba(0,0,0,0.5)"
      >
        <Flex alignItems="center">
          <Box>
            <Text textTransform="uppercase">{story.author}</Text>
            <Text fontSize="xs">Caption: {story.caption}</Text>
          </Box>
          <Icon as={FaHeart} />
        </Flex>
      </Box>
    </Box>
  );
};

export default ReelRenderer;
