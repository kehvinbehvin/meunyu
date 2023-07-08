import { Flex, Icon, Image, Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';

import { apiService } from '~/lib/api-service';
import { useAppContext } from '~/lib/contexts/AppContext';
import type { FeedItem } from '~/lib/contexts/FeedContext';

export default function FeedCard({ feed }: { feed: FeedItem }) {
  const [isLiked, setIsLiked] = useState(false);
  const { activeLoginModal, auth } = useAppContext();

  useEffect(() => {
    if (feed.likes && auth.user) {
      setIsLiked(feed.likes.includes(auth.user.id));
    }
  }, [feed, auth]);

  const likeHandler = () => {
    if (auth.user?.id) {
      setIsLiked(!isLiked);
      apiService.likePhoto(feed.fid);
    } else {
      activeLoginModal();
    }
  };

  return (
    <Box
      bg="rgba(127, 130, 107, 0.5)"
      py={5}
      px={4}
      mb={3}
      borderRadius={5}
      as={motion.div}
      whileTap={{ scale: 0.95 }}
    >
      <Text fontSize="sm">{feed.caption}</Text>
      <Image src={feed.url} borderRadius={5} mt={2} />
      <Flex
        mt={3}
        color="white"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex alignItems="center" mt={2}>
          <Image
            src={feed.avatar.src}
            w="30px"
            mr={3}
            borderRadius="500px"
            border="1px solid rgba(0,0,0,0.1)"
          />
          <Text fontWeight="bold" fontSize="md">
            {feed.author}
          </Text>
        </Flex>
        <Flex
          alignItems="center"
          color={isLiked ? 'red.500' : 'grey'}
          px={2}
          py={1}
          borderRadius={4}
          transition="all 100ms ease-in"
          onClick={likeHandler}
        >
          <Icon as={FaHeart} mr={2} fontSize="xs" />
          <Text fontSize="md" color="white">
            {feed.likes?.length || 1 + (isLiked ? 1 : 0)}
          </Text>
        </Flex>
      </Flex>
      <Text mt={2} color="white" fontSize="sm">
        {feed.caption}
      </Text>
    </Box>
  );
}
