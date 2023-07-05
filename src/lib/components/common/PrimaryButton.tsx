import { Button } from '@chakra-ui/react';
import type { ReactNode } from 'react';

export default function PrimaryButton({
  onClick,
  children,
  ...rest
}: {
  onClick?: () => void;
  children: ReactNode;
  [key: string]: unknown;
}) {
  return (
    <Button
      onClick={onClick}
      bg="brand.300"
      borderRadius={2}
      boxShadow="lg"
      color="brand.200"
      fontWeight="light"
      {...rest}
      _focus={{ bg: 'brand.300' }}
      _hover={{ bg: 'brand.300' }}
      _active={{ bg: 'brand.300' }}
    >
      {children}
    </Button>
  );
}
