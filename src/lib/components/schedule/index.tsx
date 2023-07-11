import { Image, Box, Heading, Flex, Text, Button } from '@chakra-ui/react';
import { useMemo } from 'react';

import FramerFadeIn from '../common/FramerFadeIn';
import schedule1 from '~/assets/schedule/schedule-1.png';
import scheduleChurch from '~/assets/schedule/schedule-church.png';
import { useAppContext } from '~/lib/contexts/AppContext';
import { appCopy } from '~/lib/contexts/AppCopy';

export default function Schedule() {
  const { language, auth } = useAppContext();

  const showDinner = useMemo(() => {
    if (!auth.user) return false;
    return auth.user.attendance.dinner;
  }, [auth]);

  const { title, dinner, matrimony } = appCopy.schedule;
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
          {title[language]}
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
            {matrimony.title[language]}
          </Heading>
          <Text fontSize="xs">{matrimony.subtext.en}</Text>
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
        {showDinner && (
          <>
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
                {dinner.title[language]}
              </Heading>
              <Text fontSize="xs">{dinner.subtext.en}</Text>
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
                onClick={() =>
                  window.open('https://goo.gl/maps/SmAQQf6ds48xrMSc7')
                }
              >
                Google maps
              </Button>
            </Flex>
          </>
        )}
      </FramerFadeIn>
    </Box>
  );
}
