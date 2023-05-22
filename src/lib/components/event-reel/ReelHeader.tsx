import { Flex } from '@chakra-ui/react';

import { useReelsContext } from '~/lib/contexts/ReelsContext';

import ReelBubble from './ReelBubble';

export default function ReelHeader() {
  const { reels } = useReelsContext();
  return (
    <Flex overflowX="scroll" mt={3}>
      {reels.map((reel) => (
        <ReelBubble imageSrc={reel.url} />
      ))}
    </Flex>
  );
}
