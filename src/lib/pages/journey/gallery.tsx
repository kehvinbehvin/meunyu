import { Flex } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import NavBar from '~/lib/components/common/NavBar';
import OurJourney from '~/lib/components/journey';

export default function Gallery() {
  return (
    <Flex flexDir="column">
      <NextSeo title="Gallery" />
      <NavBar />
      <OurJourney />
    </Flex>
  );
}
