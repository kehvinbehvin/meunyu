import { Box, Text, Heading, Flex, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import FramerFadeIn from '../common/FramerFadeIn';

export default function OurJourney() {
  const routes = [
    {
      href: '/journey/story',
      header: 'Our Story',
      subtitle: "Love's journey revealed",
      bgImage:
        'https://images.pixieset.com/25234906/0acd438a2b1e876b4832cc5bd50f5daf-medium.jpg',
    },
    {
      href: '/journey/gallery',
      header: 'Gallery',
      subtitle: 'Our cherished moments',
      bgImage:
        'https://images.pixieset.com/25234906/0b69b8da6d09f94900908e8ae5fba1a6-medium.jpg',
    },
    {
      href: '/journey/quiz',
      header: 'Two truths, One lie',
      subtitle: 'How much do you know us?',
      bgImage:
        'https://images.pixieset.com/25234906/8ce65f2f390407b13ea985f6aadec9e5-medium.jpg',
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
              h="150px"
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
