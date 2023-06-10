import { Flex, Heading, Icon, Image, Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

import type { FeedItem } from '~/lib/contexts/FeedContext';
import { getRelativeTime } from '~/lib/utils';

export default function FeedCard({ feed }: { feed: FeedItem }) {
  return (
    <Box
      bg="white"
      py={5}
      px={4}
      mb={3}
      borderRadius={5}
      as={motion.div}
      whileTap={{ scale: 0.95 }}
    >
      <Flex alignItems="center" mt={2}>
        <Image
          src={feed.avatar.src}
          w="30px"
          mr={3}
          borderRadius={5}
          border="1px solid rgba(0,0,0,0.1)"
        />
        <Heading fontWeight="bold" fontSize="md">
          {feed.author}
        </Heading>
      </Flex>

      <Box w="90%" borderBottom="1px solid rgba(0,0,0,0.1)" my={5} />
      <Text fontSize="sm">{feed.caption}</Text>
      <Image src={feed.url} borderRadius={5} mt={2} />
      <Flex
        mt={3}
        color="gray.500"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex
          alignItems="center"
          border="1px solid"
          borderColor="red.500"
          color="red.500"
          px={2}
          py={1}
          borderRadius={4}
        >
          <Icon as={FaHeart} mr={2} fontSize="xs" />
          <Text fontSize="xs">{feed.likes.length || 1}</Text>
        </Flex>
        <Text fontSize="xs">{getRelativeTime(feed.created_at)}</Text>
      </Flex>
    </Box>
  );
}
