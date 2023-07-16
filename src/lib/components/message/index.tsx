import { Heading, Box, Image, Text } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

import FramerFadeIn from '../common/FramerFadeIn';
import PrimaryButton from '../common/PrimaryButton';
import messagePlaceholder from '~/assets/message/message-placeholder.png';
import { apiService } from '~/lib/api-service';
import { useAppContext } from '~/lib/contexts/AppContext';
import { exportAsImage } from '~/lib/utils';

export default function Message() {
  const [message, setMessage] = useState<string>('<p></p>');
  const { auth, activeLoginModal } = useAppContext();

  const cardRef = useRef<HTMLDivElement>(null);

  const fetchUserMessage = async () => {
    const userMessage = await apiService.getMessage();
    setMessage(userMessage.message);
  };

  useEffect(() => {
    if (!auth.user) {
      activeLoginModal();
    } else {
      fetchUserMessage();
    }
  }, [auth]);

  return (
    <FramerFadeIn>
      {auth.user && (
        <>
          <Box
            textAlign="center"
            ref={cardRef}
            bg="rgb(202, 202, 180)"
            p={2}
            py={5}
          >
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
              {message && (
                <Text
                  fontSize="xs"
                  color="brand.300"
                  dangerouslySetInnerHTML={{ __html: message }}
                />
              )}
            </Box>
          </Box>
          <Box textAlign="center">
            <PrimaryButton
              onClick={() =>
                exportAsImage(cardRef.current as HTMLDivElement, 'card')
              }
            >
              Save as card
            </PrimaryButton>
          </Box>
        </>
      )}
    </FramerFadeIn>
  );
}
