import { Heading, Image, chakra, shouldForwardProp } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';

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
  card: { imageSrc: string; description: string; date: string };
}) {
  return (
    <ChakraBox
      mt={3}
      bg="white"
      pt={8}
      pb={2}
      px={4}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      transition={{ duration: 0.3 }}
    >
      <Image src={card.imageSrc} />
      <Heading color="brand.200" size="xs" my={2} fontWeight="thin">
        {card.description}
      </Heading>
      <Heading color="brand.200" size="xs" fontWeight="thin">
        {card.date}
      </Heading>
    </ChakraBox>
  );
}
