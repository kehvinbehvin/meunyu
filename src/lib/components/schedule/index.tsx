import { Image, Box, Heading, Flex, Text, Button } from '@chakra-ui/react';

import FramerFadeIn from '../common/FramerFadeIn';
import schedule1 from '~/assets/schedule/schedule-1.png';
import scheduleChurch from '~/assets/schedule/schedule-church.png';

export default function Schedule() {
  return (
    <Box position="absolute" left={0} pb="100px">
      <FramerFadeIn>
        <Heading
          color="white"
          textTransform="uppercase"
          textAlign="center"
          fontWeight="thin"
          mb={3}
        >
          Schedule
        </Heading>
        <Image src={schedule1.src} />
        <Flex
          color="brand.300"
          textAlign="center"
          flexDir="column"
          px={9}
          justify="center"
          align="center"
          mt={5}
        >
          <Heading textTransform="uppercase" fontWeight="light">
            Holy matrimony
          </Heading>
          <Text fontSize="xs">
            Lutheran Church of Our Redeemer Level 3 Sanctuary 30 Duke&apos;s Rd,
            Singapore 268912
          </Text>
          <Text fontSize="xs">Please be seated by 9.30am.</Text>
          <Button
            bg="transparent"
            border="1px solid #9D9F92"
            color="#272727"
            borderRadius={0}
            fontSize="sm"
            p={0}
            w="180px"
            mt={3}
            fontWeight="thin"
            onClick={() => window.open('https://goo.gl/maps/rAP99PCxsEUFNPAD6')}
          >
            Google maps
          </Button>

          <Image src={scheduleChurch.src} />
        </Flex>
        <Image src={schedule1.src} />
        <Flex
          color="brand.300"
          textAlign="center"
          flexDir="column"
          px={9}
          justify="center"
          align="center"
          mt={5}
        >
          <Heading textTransform="uppercase" fontWeight="light">
            BANQUET DINNER
          </Heading>
          <Text fontSize="xs">
            One Farrer Hotel Napier, Read & Spottiswoode Level 6 1 Farrer Park
            Station Road Singapore 217562 The Tea Ceremony for family will begin
            at 6.30pm.
          </Text>
          <Text fontSize="xs">Please be seated by 7.00pm.</Text>
          <Button
            bg="transparent"
            border="1px solid #9D9F92"
            color="#272727"
            borderRadius={0}
            fontSize="sm"
            p={0}
            w="180px"
            mt={3}
            fontWeight="thin"
            onClick={() => window.open('https://goo.gl/maps/SmAQQf6ds48xrMSc7')}
          >
            Google maps
          </Button>
        </Flex>
      </FramerFadeIn>
    </Box>
  );
}
