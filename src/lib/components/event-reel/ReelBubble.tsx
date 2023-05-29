import { Box, Image } from '@chakra-ui/react';

export default function ReelBubble({
  imageSrc,
  onClick,
}: {
  imageSrc: string;
  onClick: () => void;
}) {
  return (
    <Box
      mr={3}
      minW="68px"
      borderRadius="50%"
      p="2px"
      backgroundImage="radial-gradient(circle at top left, red, orange)"
    >
      <Box p="2px" background="white" borderRadius="50%" minW="62px">
        <Image
          onClick={onClick}
          src={imageSrc}
          objectFit="cover"
          height="60px"
          borderRadius="50%"
          mx="auto"
        />
      </Box>
    </Box>
  );
}