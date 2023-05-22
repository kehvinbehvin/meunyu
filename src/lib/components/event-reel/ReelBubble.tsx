import { Box, Image } from '@chakra-ui/react';

export default function ReelBubble({ imageSrc }: { imageSrc: string }) {
  return (
    <Box mr={3} minW="50px">
      <Image
        src={imageSrc}
        objectFit="cover"
        height="50px"
        borderRadius="50%"
        border="1px solid black"
      />
    </Box>
  );
}
