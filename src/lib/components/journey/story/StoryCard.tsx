import { Heading, Image, chakra, shouldForwardProp } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';

import { useAppContext } from '~/lib/contexts/AppContext';

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function StoryCard({
  card,
}: {
  card: {
    type: string;
    description?: { en: string; ko: string };
    imageSrc?: string;
    header?: { en: string; ko: string };
    date?: string;
  };
}) {
  const { language } = useAppContext();
  return (
    <ChakraBox
      mt={3}
      bg="white"
      pt={5}
      pb={3}
      px={4}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      transition={{ duration: 0.3 }}
    >
      {card.type === 'photo' ? (
        <>
          <Image src={card.imageSrc} />
          {card.header && (
            <Heading
              color="brand.200"
              size="xs"
              my={2}
              fontWeight="thin"
              textTransform="uppercase"
            >
              {card.header[language]}
            </Heading>
          )}
          {card.description && (
            <Heading color="brand.200" size="xs" my={2} fontWeight="thin">
              {card.description[language]}
            </Heading>
          )}
          <Heading color="brand.200" size="xs" fontWeight="thin">
            {card.date}
          </Heading>
        </>
      ) : (
        <>
          {card.header && (
            <Heading
              color="brand.200"
              size="md"
              my={3}
              fontWeight="bold"
              px={5}
            >
              {card.header[language]}
            </Heading>
          )}
          {card.description && (
            <Heading
              my={4}
              color="brand.200"
              size="xs"
              fontWeight="thin"
              px={5}
              textAlign="justify"
            >
              {card.description[language]}
            </Heading>
          )}
        </>
      )}
    </ChakraBox>
  );
}
