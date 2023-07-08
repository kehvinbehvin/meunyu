import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

import WeddingRingGif from '~/assets/ring.gif';
import { useAppContext } from '~/lib/contexts/AppContext';
import { appCopy } from '~/lib/contexts/AppCopy';

export default function LoaderScreen() {
  const { isLoading, language } = useAppContext();
  const texts = useMemo(() => appCopy.feed.loader[language], [language]);

  const [textIndex, setTextIndex] = useState(
    Math.floor(Math.random() * texts.length) + 1
  );

  const displayText = useMemo(() => texts[textIndex], [textIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((currIndex) => (currIndex + 1) % texts.length);
    }, 1500);
    return () => {
      clearInterval(interval);
    };
  }, [textIndex]);

  return (
    <AnimatePresence>
      {isLoading && (
        <Box
          as={motion.div}
          display="flex"
          pos="absolute"
          alignItems="center"
          justifyContent="center"
          inset="0 0 0 0"
          bg="brand.200"
          zIndex={10}
          h="100vh"
          animate={{ transform: 'translateY(0)' }}
          exit={{ transform: 'translateY(100%)' }}
        >
          <Flex
            bg="white"
            align="center"
            justify="center"
            overflow="hidden"
            borderRadius="500px"
            w="240px"
            h="240px"
            flexDir="column"
          >
            <Image src={WeddingRingGif.src} w="100px" h="100px" />
            <Text
              fontSize="sm"
              textAlign="center"
              as={motion.p}
              initial={{ transform: 'translateX(20px)', opacity: 0 }}
              animate={{ transform: 'translateX(0)', opacity: 1 }}
              exit={{ transform: 'translateX(-20px)', opacity: 0 }}
              key={displayText}
            >
              {displayText}...
            </Text>
          </Flex>
        </Box>
      )}
    </AnimatePresence>
  );
}
