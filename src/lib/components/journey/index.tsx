import { Box, Text, Heading, Flex, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import FramerFadeIn from '../common/FramerFadeIn';
import mask1 from '~/assets/journey-mask-1.png';
import mask2 from '~/assets/journey-mask-2.png';
import mask3 from '~/assets/journey-mask-3.png';

export default function OurJourney() {
  const routes = [
    {
      href: '/journey/story',
      header: 'Our Story',
      subtitle: "Love's journey revealed",
      bgImage: mask1.src,
    },
    {
      href: '/journey/gallery',
      header: 'Gallery',
      subtitle: 'Our cherished moments',
      bgImage: mask2.src,
    },
    {
      href: '/journey/quiz',
      header: 'Two truths, One lie',
      subtitle: 'How much do you know us?',
      bgImage: mask3.src,
    },
  ];
  return (
    <Box>
      {routes.map((route) => (
        <Link href={route.href} key={route.href}>
          <FramerFadeIn>
            <Box
              as={motion.div}
              whileTap={{ scale: 0.95 }}
              color="brand.300"
              textAlign="center"
              borderRadius="500px"
              h="120px"
              my={9}
              bgImage={`url('${route.bgImage}')`}
              bgSize="cover"
              bgPos="center"
              pos="relative"
              overflow="hidden"
            >
              <Flex
                position="absolute"
                inset="0 0 0 0"
                bg="rgba(0,0,0,0.5)"
                flexDir="column"
                align="center"
                justify="center"
              >
                <Heading textTransform="uppercase" fontSize="2xl">
                  {route.header}
                </Heading>
                <Text>{route.subtitle}</Text>
              </Flex>
            </Box>
          </FramerFadeIn>
        </Link>
      ))}
    </Box>
  );
}
