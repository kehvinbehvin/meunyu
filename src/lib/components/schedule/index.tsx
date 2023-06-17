import { Image, Box, Heading, Flex, Text } from '@chakra-ui/react';

import FramerFadeIn from '../common/FramerFadeIn';

export default function Schedule() {
  return (
    <Box position="absolute" left={0}>
      <FramerFadeIn>
        <Image src="https://static.wixstatic.com/media/a080cb_8b56aa8a9fab46eaa83fc0b25cc65b5b~mv2.jpg/v1/fit/w_970,h_688,q_90/a080cb_8b56aa8a9fab46eaa83fc0b25cc65b5b~mv2.jpg" />
        <Flex
          color="brand.300"
          textAlign="center"
          h="40vh"
          flexDir="column"
          px={9}
          justify="center"
        >
          <Heading textTransform="uppercase" fontWeight="light">
            Holy matrimony
          </Heading>
          <Text fontSize="xs">
            Lutheran Church of Our Redeemer Level 3 Sanctuary 30 Duke&apos;s Rd,
            Singapore 268912
          </Text>
          <Text fontSize="xs">Please be seated by 9.30am.</Text>
        </Flex>
      </FramerFadeIn>
    </Box>
  );
}
