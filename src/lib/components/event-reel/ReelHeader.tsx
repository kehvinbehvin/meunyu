import { Flex } from '@chakra-ui/react';

import ReelBubble from './ReelBubble';

export default function ReelHeader() {
  return (
    <Flex overflowX="scroll" mt={3}>
      <ReelBubble />
      <ReelBubble />
      <ReelBubble />
      <ReelBubble />
      <ReelBubble />
    </Flex>
  );
}
