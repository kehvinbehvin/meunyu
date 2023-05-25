import { Flex, Icon } from '@chakra-ui/react';
import { CgFeed } from 'react-icons/cg';
import { GiLovers } from 'react-icons/gi';

export default function NavBar() {
  return (
    <Flex
      position="fixed"
      bottom={0}
      right={0}
      w="100vw"
      bg="white"
      zIndex={2}
      py={3}
      h="50px"
      justifyContent="space-around"
    >
      <Icon as={CgFeed} w={8} h={8} />
      <Icon as={GiLovers} w={8} h={8} />
      <Icon as={CgFeed} w={8} h={8} />
      <Icon as={CgFeed} w={8} h={8} />
    </Flex>
  );
}
