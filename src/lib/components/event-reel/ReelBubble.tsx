import { Box, Image } from '@chakra-ui/react';

export default function ReelBubble() {
  return (
    <Box mr={3} minW="50px">
      <Image
        src="https://picsum.photos/1000/1000?random=5"
        objectFit="cover"
        height="50px"
        borderRadius="50%"
        border="1px solid black"
      />
    </Box>
  );
}
