import { Flex } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import NavBar from '~/lib/components/common/NavBar';
import Message from '~/lib/components/message';

export default function MessagePage() {
  return (
    <Flex flexDir="column">
      <NextSeo title="Message" />
      <NavBar />
      <Message />
    </Flex>
  );
}
