import { Box, Text, Heading, Flex } from '@chakra-ui/react';
import { useState } from 'react';

export default function OurJourney() {
  const routes = [
    {
      href: '/journey/story',
      header: 'Our Story',
      subtitle: "Love's journey revealed",
    },
    {
      href: '/journey/gallery',
      header: 'Gallery',
      subtitle: 'Our cherished moments',
    },
    {
      href: '/journey/story',
      header: 'Two truths, One lie',
      subtitle: 'How much do you know us?',
    },
  ];
  return (
    <Box>
      {routes.map((route) => (
        <Box
          color="brand.300"
          textAlign="center"
          borderRadius="500px"
          h="150px"
          my={9}
          bgImage={
            "url('https://images.pexels.com/photos/2403568/pexels-photo-2403568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
          }
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
      ))}
    </Box>
  );
}
