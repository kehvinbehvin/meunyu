import { Box, Flex, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import message from '~/assets/message.png';
import couple from '~/assets/parents.png';
import photo from '~/assets/photos.png';
import schedule from '~/assets/schedule.png';

export default function NavBar() {
  const router = useRouter();

  const routes = [
    { path: 'feed', icon: photo },
    { path: 'journey', icon: couple },
    { path: 'schedule', icon: schedule },
    { path: 'mailbox', icon: message },
  ];

  return (
    <Flex
      position="fixed"
      bottom={0}
      right={0}
      w="100vw"
      bg="white"
      zIndex={2}
      py={3}
      h="50px"
      justifyContent="space-around"
    >
      {routes.map((route) => (
        <Link href={route.path} key={route.path}>
          <Box>
            <Image
              src={route.icon.src}
              w={7}
              h={7}
              opacity={router.pathname.includes(route.path) ? 1 : 0.3}
            />
            <Box
              w="3px"
              h="3px"
              bgColor="blue.500"
              mx="auto"
              borderRadius="500px"
              mt={1}
              opacity={router.pathname.includes(route.path) ? 1 : 0}
            />
          </Box>
        </Link>
      ))}
    </Flex>
  );
}
