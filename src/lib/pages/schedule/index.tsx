import { Flex } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import NavBar from '~/lib/components/common/NavBar';
import Schedule from '~/lib/components/schedule';

export default function SchedulePage() {
  return (
    <Flex flexDir="column">
      <NextSeo title="Schedule" />
      <NavBar />
      <Schedule />
    </Flex>
  );
}
