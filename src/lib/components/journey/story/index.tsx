/* eslint-disable sonarjs/no-duplicate-string */
import { Box, Heading, Text } from '@chakra-ui/react';

import journey1 from '~/assets/journey/1.png';
import journey10 from '~/assets/journey/10.png';
import journey11 from '~/assets/journey/11.jpeg';
import journey12 from '~/assets/journey/12.jpeg';
import journey13 from '~/assets/journey/13.jpeg';
import journey14 from '~/assets/journey/14.jpeg';
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
    date: '24.02.2019',
    type: 'photo',
  },
  {
    header: 'HOW WE MET',
    description:
      'We met in NUS Temasek Hall back in 2019! We were both cast in the same musical production and even though our characters had no scenes or interactions together in the play, we somehow clicked hahaha. Fun fact: when we first met, Eunyu was really hungry so Matt offered her a protein bar he had, saying he didn’t need it and she could have it.She gobbled it up right away but actually the protein bar was super expensive and it was actually a bit heart pain but he now doesn’t regret giving her that protein bar at all ;)',
    type: 'text',
  },
  {
    imageSrc: journey2.src,
    header: 'OUR FIRST DATE',
    description:
      'ArtScience Museum & Gardens By The Bay! We went for a few exhibitions and went on the Skyway too',
    date: '28.06.2019',
    type: 'photo',
  },
  {
    imageSrc: journey3.src,
    header: 'Our first anniversary',
    date: '12.08.2020',
    type: 'photo',
  },
  {
    imageSrc: journey6.src,
    header: 'GUDETAMA EXHIBITION',
    description: 'Did you know that Eunyu is a huge fan of Gudetama?',
    date: '23.03.2019',
    type: 'photo',
  },
  {
    imageSrc: journey7.src,
    description: 'OUR FIRST PICNIC TOGETHER',
    date: '16.05.2019',
    type: 'photo',
  },
  {
    imageSrc: journey8.src,
    header: 'BALI',
    description: 'White water rafting in Bali with our friends',
    date: '27.06.2019',
    type: 'photo',
  },
  {
    imageSrc: journey4.src,
    header: 'OUR SECOND ANNIVERSARY',
    date: '12.08.2021',
    type: 'photo',
  },
  {
    imageSrc: journey9.src,
    header: 'POST-COVID',
    description:
      'Finally reunited after circuit breaker to celebrate our birthdays!',
    date: '07.07.2020',
    type: 'photo',
  },
  {
    imageSrc: journey10.src,
    header: 'GRADUATION',
    description: 'We graduated together from NUS in the same year!',
    date: '24.07.2022',
    type: 'photo',
  },
  {
    imageSrc: journey10.src,
    header: 'HOW WE’VE GROWN',
    description:
      'From the wide-eyed university kids to even wider-eyed adults, we’ve learnt so much about ourselves and each other. We learnt (and still learning) how to love each other more each day, through all our idiosyncrasies, cute moments, laughter and tears just as Christ loved us when He gave up His life for us. This self-sacrificial love is still too wide and deep for us to fathom, but we get to learn more about it each day as we live loved by God and live loving one another. We stepped out in faith to move to the same church, pick up new languages and spent time getting to know each others’ friends and family and God has been so faithful to unite our different cultures and worlds together in His grace. He’s blessed us with new family, new friends, new communities that have prayed, supported and helped us become who we are today. ',
    date: '24.07.2022',
    type: 'text',
  },
  {
    imageSrc: journey5.src,
    header: 'OUR THIRD ANNIVERSARY',
    date: '12.08.2022',
    type: 'photo',
  },
  {
    imageSrc: journey11.src,
    header: 'SHE',
    date: '28.05.2022',
    type: 'photo',
  },
  {
    imageSrc: journey12.src,
    header: 'SAID',
    date: '28.05.2022',
    type: 'photo',
  },
  {
    imageSrc: journey13.src,
    header: 'YES',
    date: '28.05.2022',
    type: 'photo',
  },
  {
    imageSrc: journey14.src,
    date: '28.05.2022',
    type: 'photo',
  },
  {
    header: 'OUR THEME VERSE',
    description:
      'A verse that has given us much hope and anchored our relationship from the start is 1 Corinthians 13:7 in the Amplified: “Love bears all things [regardless of what comes], believes all things [looking for the best in each one], hopes all things [remaining steadfast during difficult times], endures all things [without weakening].” In and of ourselves this is truly an impossible task, but this isn’t just an idea of love but Love Himself that lives in us. No matter how different every day may be, whenever we look to the cross and see this very love demonstrated for us, it enables us to love each other in the same way today, tomorrow and for every day of our future. We hope it encourages you too!',
    type: 'text',
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
