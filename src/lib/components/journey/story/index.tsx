import { Box, Heading, Text } from '@chakra-ui/react';

import journey1 from '~/assets/journey/1.png';
import journey10 from '~/assets/journey/10.png';
import journey11 from '~/assets/journey/11.jpeg';
import journey12 from '~/assets/journey/12.jpeg';
import journey13 from '~/assets/journey/13.jpeg';
import journey2 from '~/assets/journey/2.png';
import journey3 from '~/assets/journey/3.png';
import journey4 from '~/assets/journey/4.png';
import journey5 from '~/assets/journey/5.png';
import journey6 from '~/assets/journey/6.jpeg';
import journey7 from '~/assets/journey/7.jpeg';
import journey8 from '~/assets/journey/8.jpeg';
import journey9 from '~/assets/journey/9.jpeg';

import StoryCard from './StoryCard';

const storyItems = [
  {
    imageSrc: journey1.src,
    description: 'After our hall’s choral and a capella concert!',
    date: '01.01.2019',
  },
  {
    imageSrc: journey2.src,
    description:
      'First date: ArtScience Museum & Gardens By The Bay! We went for a few exhibitions and went on the Skyway too',
    date: '01.01.2020',
  },
  {
    imageSrc: journey3.src,
    description: 'Our first anniversary',
    date: '01.01.2020',
  },
  {
    imageSrc: journey4.src,
    description: 'Our second anniversary',
    date: '01.01.2021',
  },
  {
    imageSrc: journey5.src,
    description: 'Our third anniversary',
    date: '01.01.2022',
  },
  {
    imageSrc: journey6.src,
    description: 'Gudetama exhibition',
    date: '01.06.2021',
  },
  {
    imageSrc: journey7.src,
    description: 'First picnic together',
    date: '01.03.2023',
  },
  {
    imageSrc: journey8.src,
    description: 'White water rafting in bali with our friends',
    date: '02.01.2023',
  },
  {
    imageSrc: journey9.src,
    description: 'White water rafting in bali with our friends',
    date: '02.01.2023',
  },
  {
    imageSrc: journey10.src,
    description: 'Graduating from NUS',
    date: '01.01.2023',
  },
  {
    imageSrc: journey11.src,
    description: 'She said YES!',
    date: '01.01.2021',
  },
  {
    imageSrc: journey12.src,
    description: 'Proposal',
    date: '01.01.2023',
  },
  {
    imageSrc: journey13.src,
    description: 'Matt is happy',
    date: '01.06.2022',
  },
];

export default function StoryComponent() {
  return (
    <Box textAlign="center">
      <Heading color="white" fontWeight="thin" textTransform="uppercase">
        Our story
      </Heading>
      <Text color="white" fontSize="xs" mt={2}>
        Once upon a time, our paths crossed. From that moment on, our love story
        began to unfold.
      </Text>
      <Box>
        {storyItems.map((story) => (
          <StoryCard card={story} />
        ))}
      </Box>
    </Box>
  );
}
