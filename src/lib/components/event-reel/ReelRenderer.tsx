import { Box, Flex, Icon, Image, Spinner, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { VscChromeClose } from 'react-icons/vsc';
import type {
  Renderer,
  Story,
  Action,
} from 'react-insta-stories/dist/interfaces';

import type { Reel } from '~/lib/contexts/FeedContext';
import { useReelsContext } from '~/lib/contexts/FeedContext';

const ReelRenderer: Renderer = ({
  action,
  story,
}: {
  action: Action;
  story: Story;
}) => {
  const [hasImageLoaded, setHasImageLoaded] = useState(false);
  const { setShowReel } = useReelsContext();
  useEffect(() => {
    setHasImageLoaded(false);
  }, []);
  useEffect(() => {
    if (hasImageLoaded) action('play');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasImageLoaded]);
  return (
    <Box>
      <Icon
        as={VscChromeClose}
        onClick={() => setShowReel(false)}
        position="absolute"
        top={6}
        right={5}
        zIndex={1000}
        color="white"
      />
      <Image src={story.url} onLoad={() => setHasImageLoaded(true)} />
      {!hasImageLoaded && (
        <Box
          position="absolute"
          left="50%"
          top="50%"
          transform="translate(-50%,-50%)"
          color="white"
        >
          <Spinner thickness="4px" speed="0.65s" size="xl" />
        </Box>
      )}
      <Box
        position="absolute"
        bottom={0}
        h="20vh"
        w="100%"
        px={5}
        py={3}
        bgColor="rgba(0,0,0,0.5)"
      >
        <Flex
          alignItems="flex-start"
          justifyContent="space-between"
          color="brand.100"
        >
          <Box>
            <Text textTransform="uppercase" fontWeight="extrabold">
              {(story as Reel).author}
            </Text>
            <Text fontSize="xs">{(story as Reel).caption}</Text>
          </Box>
          <Icon as={FaHeart} color="brand.400" />
        </Flex>
      </Box>
    </Box>
  );
};

export default ReelRenderer;
