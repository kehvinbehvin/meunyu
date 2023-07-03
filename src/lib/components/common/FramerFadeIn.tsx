import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function FramerFadeIn({ children }: { children: ReactNode }) {
  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0, transform: 'translateY(-5px)' }}
      animate={{ opacity: 1, transform: 'translateY(0)' }}
      exit={{ opacity: 0 }}
    >
      {children}
    </Box>
  );
}
