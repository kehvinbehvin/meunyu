import { Flex } from '@chakra-ui/react';

import { useReelsContext } from '~/lib/contexts/ReelsContext';

import ReelBubble from './ReelBubble';

export default function ReelHeader() {
  const { reels, setShowReel } = useReelsContext();
  return (
    <Flex overflowX="scroll" mt={3}>
      <ReelBubble
        imageSrc="https://www.freepnglogos.com/uploads/plus-icon/plus-icon-plus-math-icon-download-icons-9.png"
        onClick={() => {}}
      />
      {reels.map((reel) => (
        <ReelBubble imageSrc={reel.url} onClick={() => setShowReel(true)} />
      ))}
    </Flex>
  );
}
