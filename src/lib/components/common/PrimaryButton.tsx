import { Button } from '@chakra-ui/react';
import type { ReactNode } from 'react';

export default function PrimaryButton({
  onClick,
  children,
  ...rest
}: {
  onClick?: () => void;
  children: ReactNode;
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
    >
      {children}
    </Button>
  );
}
