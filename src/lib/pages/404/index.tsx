import { Box, Heading, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import PrimaryButton from '~/lib/components/common/PrimaryButton';

const Page404 = () => {
  return (
    <Flex minHeight="70vh" direction="column" justifyContent="center">
      <NextSeo title="404 Not Found" />
      <Box marginY={4}>
        <Heading textAlign="center" size="lg">
          Page not found
        </Heading>

        <Box textAlign="center" marginTop={4}>
          <PrimaryButton as={Link} href="/feed" size="sm">
            Let&apos;s Head Back
          </PrimaryButton>
        </Box>
      </Box>
    </Flex>
  );
};

export default Page404;
