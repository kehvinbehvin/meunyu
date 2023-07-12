import { Heading, Box, Image, Text, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';

import FramerFadeIn from '../common/FramerFadeIn';
import PrimaryButton from '../common/PrimaryButton';
import messagePlaceholder from '~/assets/message/message-placeholder.png';
import { useAppContext } from '~/lib/contexts/AppContext';

export default function Message() {
  const { auth, activeLoginModal } = useAppContext();

  useEffect(() => {
    if (!auth.loggedIn) {
      activeLoginModal();
    }
  }, []);

  return (
    <FramerFadeIn>
      {!auth.user && (
        <Flex
          mt={9}
          flexDir="column"
          h="50vh"
          justify="center"
          textAlign="center"
        >
          <Text>You must be logged in to view messages</Text>
          <PrimaryButton onClick={activeLoginModal} mt={5} w="200px" mx="auto">
            Log in
          </PrimaryButton>
        </Flex>
      )}
      {auth.user && (
        <Box textAlign="center">
          <Heading
            color="brand.300"
            textTransform="uppercase"
            fontWeight="light"
          >
            From us, to you
          </Heading>
          <Box
            border="1px solid black"
            borderColor="brand.200"
            overflow="hidden"
            borderRadius="full"
            mt={5}
            p={3}
            maxW="300px"
            mx="auto"
          >
            <Box borderRadius="full" overflow="hidden">
              <Image
                bgPos="center center"
                src={messagePlaceholder.src}
                mx="auto"
              />
            </Box>
          </Box>
          <Box>
            <Heading color="brand.300" fontWeight="light" my={3}>
              Dearest {auth.user.name},
            </Heading>
            <Text fontSize="xs" color="brand.300">
              Your kind words, well wishes, and thoughtful gestures touched our
              hearts deeply. The love and support we felt from you and your
              presence made our wedding day even more meaningful and magical. We
              were truly overwhelmed by your generosity and the effort you put
              into being a part of our joyous occasion.
            </Text>
          </Box>
        </Box>
      )}
    </FramerFadeIn>
  );
}
