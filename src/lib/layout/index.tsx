import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      margin="0 auto"
      h="100%"
      maxWidth="300px"
      transition="0.5s ease-out"
      bgColor="brand.100"
      color="#042A2B"
      minH="100vh"
      pb={3}
      pt={5}
      mb={9}
      pos="relative"
    >
      <Header />
      <Box as="main" py={5} w="90%" mx="auto">
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
