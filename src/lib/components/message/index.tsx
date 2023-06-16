import { Heading, Box, Image, Text } from '@chakra-ui/react';

export default function Message() {
  return (
    <Box textAlign="center">
      <Heading color="brand.300" textTransform="uppercase" fontWeight="light">
        From us, to you
      </Heading>
      <Box
        border="1px solid black"
        borderColor="brand.200"
        overflow="hidden"
        borderRadius="300px"
        mt={9}
        p={3}
        h="300px"
      >
        <Box borderRadius="300px" overflow="hidden" h="275px">
          <Image
            bgPos="center center"
            src="https://images.pexels.com/photos/16756548/pexels-photo-16756548/free-photo-of-amor-andino.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </Box>
      </Box>
      <Box>
        <Heading color="brand.300" fontWeight="light" my={3}>
          Dearest Chelsea,
        </Heading>
        <Text fontSize="xs" color="brand.300">
          Your kind words, well wishes, and thoughtful gestures touched our
          hearts deeply. The love and support we felt from you and your presence
          made our wedding day even more meaningful and magical. We were truly
          overwhelmed by your generosity and the effort you put into being a
          part of our joyous occasion.
        </Text>
      </Box>
    </Box>
  );
}
