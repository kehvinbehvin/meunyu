import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      margin="0 auto"
      h="100%"
      maxWidth={800}
      transition="0.5s ease-out"
      bgColor="#EDE8E7"
      color="#042A2B"
      minH="100vh"
      pb={3}
    >
      <Box as="main" py={5} w="90%" mx="auto">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
