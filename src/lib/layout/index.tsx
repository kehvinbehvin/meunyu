import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
      <Box as="main" my={5} w="90%" mx="auto">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
