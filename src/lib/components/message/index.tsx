import { Heading, Box, Image, Text } from '@chakra-ui/react';
import * as Sentry from '@sentry/nextjs';
import { useEffect, useRef, useState } from 'react';

import FramerFadeIn from '../common/FramerFadeIn';
import PrimaryButton from '../common/PrimaryButton';
import messagePlaceholder from '~/assets/message/message-placeholder.png';
import { apiService } from '~/lib/api-service';
import { useAppContext } from '~/lib/contexts/AppContext';
import { appCopy } from '~/lib/contexts/AppCopy';
import { exportAsImage } from '~/lib/utils';

const MessageNotReady = () => {
  const { title, subtext } = appCopy.messages.notReady;
  const { language } = useAppContext();
  return (
    <Box color="white" textAlign="center" mt="10vh">
      <Heading textTransform="uppercase">{title[language]}</Heading>
      <Text mt={9}>{subtext[language]}</Text>
    </Box>
  );
};

export default function Message() {
  const [isMessageReady, setIsMessageReady] = useState(false);
  const [message, setMessage] = useState<string>('<p></p>');
  const { auth, activeLoginModal } = useAppContext();

  const cardRef = useRef<HTMLDivElement>(null);

  const fetchUserMessage = async () => {
    try {
      const userMessage = await apiService.getMessage();
      Sentry.captureMessage('User read message');
      setMessage(userMessage.message);
      setIsMessageReady(true);
    } catch (err) {
      Sentry.captureException(err);
      setIsMessageReady(false);
    }
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
      {!isMessageReady && <MessageNotReady />}
      {isMessageReady && auth.user && (
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
