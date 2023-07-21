import { Box, Link } from '@chakra-ui/react';
import Gallery from 'react-photo-gallery';

import PrimaryButton from '../../common/PrimaryButton';
import p1 from '~/assets/gallery/1.jpg';
import p10 from '~/assets/gallery/10.jpg';
import p11 from '~/assets/gallery/11.jpg';
import p12 from '~/assets/gallery/12.jpg';
import p13 from '~/assets/gallery/13.jpg';
import p14 from '~/assets/gallery/14.jpg';
import p15 from '~/assets/gallery/15.jpg';
import p16 from '~/assets/gallery/16.jpg';
import p17 from '~/assets/gallery/17.jpg';
import p18 from '~/assets/gallery/18.jpg';
import p19 from '~/assets/gallery/19.jpg';
import p2 from '~/assets/gallery/2.jpg';
import p20 from '~/assets/gallery/20.jpg';
import p21 from '~/assets/gallery/21.jpg';
import p22 from '~/assets/gallery/22.jpg';
import p23 from '~/assets/gallery/23.jpg';
import p24 from '~/assets/gallery/24.jpg';
import p25 from '~/assets/gallery/25.jpg';
import p26 from '~/assets/gallery/26.jpg';
import p27 from '~/assets/gallery/27.jpg';
import p28 from '~/assets/gallery/28.jpg';
import p29 from '~/assets/gallery/29.jpg';
import p3 from '~/assets/gallery/3.jpg';
import p30 from '~/assets/gallery/30.jpg';
import p4 from '~/assets/gallery/4.jpg';
import p5 from '~/assets/gallery/5.jpg';
import p6 from '~/assets/gallery/6.jpg';
import p7 from '~/assets/gallery/7.jpg';
import p8 from '~/assets/gallery/8.jpg';
import p9 from '~/assets/gallery/9.jpg';
import { useAppContext } from '~/lib/contexts/AppContext';
import { appCopy } from '~/lib/contexts/AppCopy';

export default function GalleryPhotos() {
  const { language } = useAppContext();
  const { back } = appCopy.common;
  const photos = [
    {
      src: p29.src,
      width: 1,
      height: 0.7,
    },
    {
      src: p1.src,
      width: 1,
      height: 1.5,
    },
    {
      src: p2.src,
      width: 1,
      height: 1.5,
    },
    {
      src: p3.src,
      width: 1,
      height: 1.5,
    },
    {
      src: p4.src,
      width: 1,
      height: 1.2,
    },
    {
      src: p5.src,
      width: 1,
      height: 1.5,
    },
    {
      src: p6.src,
      width: 1,
      height: 1.5,
    },
    {
      src: p7.src,
      width: 1,
      height: 1.5,
    },
    {
      src: p8.src,
      width: 1,
      height: 0.7,
    },
    {
      src: p9.src,
      width: 1,
      height: 1.5,
    },
    {
      src: p10.src,
      width: 1,
      height: 1.5,
    },
    {
      src: p11.src,
      width: 1,
      height: 0.7,
    },
    {
      src: p12.src,
      width: 1,
      height: 1.5,
    },
    {
      src: p13.src,
      width: 1,
      height: 1,
    },
    {
      src: p14.src,
      width: 1,
      height: 1,
    },
    {
      src: p15.src,
      width: 1,
      height: 1,
    },
    {
      src: p16.src,
      width: 1,
      height: 1.5,
    },
    {
      src: p17.src,
      width: 1,
      height: 1,
    },
    {
      src: p18.src,
      width: 1,
      height: 1.5,
    },
    {
      src: p19.src,
      width: 1,
      height: 1.3,
    },
    {
      src: p20.src,
      width: 1,
      height: 1.4,
    },
    {
      src: p21.src,
      width: 1,
      height: 1.5,
    },
    {
      src: p22.src,
      width: 1,
      height: 1.5,
    },
    {
      src: p23.src,
      width: 1,
      height: 1.5,
    },
    {
      src: p24.src,
      width: 1,
      height: 1.5,
    },
    {
      src: p25.src,
      width: 1,
      height: 1.5,
    },
    {
      src: p26.src,
      width: 1,
      height: 1.5,
    },
    {
      src: p27.src,
      width: 1,
      height: 1.5,
    },
    {
      src: p30.src,
      width: 1,
      height: 1,
    },
    {
      src: p28.src,
      width: 1,
      height: 0.7,
    },
  ];
  return (
    <Box>
      <Gallery photos={photos} direction="column" columns={2} />
      <Box h="50px" mt="100px">
        <Link href="/journey">
          <PrimaryButton w="full">{back[language]}</PrimaryButton>
        </Link>
      </Box>
    </Box>
  );
}
