import { Flex, Heading, Icon, Image, Box, Text } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';

import type { Reel } from '~/lib/contexts/ReelsContext';

export default function FeedCard({ reel }: { reel: Reel }) {
  return (
    <Box bg="white" py={5} px={4} mb={3} borderRadius={5}>
      <Flex alignItems="center" mt={2}>
        <Image
          src={reel.avatar.src}
          w="30px"
          mr={3}
          borderRadius={5}
          border="1px solid rgba(0,0,0,0.1)"
        />
        <Heading fontWeight="bold" fontSize="md">
          {reel.author}
        </Heading>
      </Flex>

      <Box w="90%" borderBottom="1px solid rgba(0,0,0,0.1)" my={5} />
      <Text fontSize="sm">{reel.caption}</Text>
      <Image src={reel.url} borderRadius={5} mt={2} />
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
          <Text fontSize="xs">{reel.likes}</Text>
        </Flex>
        <Text fontSize="xs">2 hours ago</Text>
      </Flex>
    </Box>
  );
}
