import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function DashboardPopout({
  children,
  attr,
}: {
  children: ReactNode;
  attr?: any;
}) {
  return (
    <motion.div
      style={{ width: '100%', zIndex: 0 }}
      initial={{ opacity: 0, translateY: '-10px' }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Flex
        bgColor="white"
        color="brand.200"
        p={5}
        flexDir="column"
        alignItems="center"
        borderRadius={15}
        w="90%"
        boxShadow="2xl"
        {...attr}
      >
        {children}
      </Flex>
    </motion.div>
  );
}
