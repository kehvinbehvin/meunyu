import { Flex } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import NavBar from '~/lib/components/common/NavBar';
import GalleryPhotos from '~/lib/components/journey/gallery/GalleryPhotos';

export default function GalleryPage() {
  return (
    <Flex flexDir="column">
      <NextSeo title="Gallery" />
      <NavBar />
      <GalleryPhotos />
    </Flex>
  );
}
