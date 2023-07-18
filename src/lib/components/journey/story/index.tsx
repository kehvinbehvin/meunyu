/* eslint-disable sonarjs/no-duplicate-string */
import { Box, Heading, Text } from '@chakra-ui/react';
import { useMemo } from 'react';

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
import { useAppContext } from '~/lib/contexts/AppContext';
import { appCopy } from '~/lib/contexts/AppCopy';

import StoryCard from './StoryCard';

export default function StoryComponent() {
  const { howWeGrown, howWeMet, themeVerse, title } = appCopy.journey.story;
  const storyItems = useMemo(
    () => [
      {
        imageSrc: journey1.src,
        description: {
          en: 'After our hall’s choral and a capella concert!',
          ko: '우리 홀의 합창단과 어카펠라 콘서트 끝나고!',
        },
        date: '24.02.2019',
        type: 'photo',
      },
      {
        header: howWeMet.header,
        description: howWeMet.text,
        type: 'text',
      },
      {
        imageSrc: journey2.src,
        header: {
          en: 'Our First Date',
          ko: '첫 번째 데이트',
        },
        description: {
          en: 'ArtScience Museum & Gardens By The Bay! We went for a few exhibitions and went on the Skyway too',
          ko: '아트사이언스 박물관과 가든 바이 더 베이! 몇 개의 전시회를 보러 갔고, 스카이웨이도 탔어요',
        },
        date: '28.06.2019',
        type: 'photo',
      },
      {
        imageSrc: journey3.src,
        header: {
          en: 'Our first anniversary',
          ko: '우리 첫 번째 기념일',
        },
        date: '12.08.2020',
        type: 'photo',
      },
      {
        imageSrc: journey6.src,
        header: {
          en: 'Gudetama Exhibition',
          ko: '구데타마 전시회',
        },
        description: {
          en: 'Did you know that Eunyu is a huge fan of Gudetama?',
          ko: '은유가 구데타마의 열렬한 팬이라는 거 알고 계셨나요?',
        },
        date: '23.03.2019',
        type: 'photo',
      },
      {
        imageSrc: journey7.src,
        header: {
          en: 'Our First Picnic Together',
          ko: '우리의 첫 피크닉',
        },
        date: '16.05.2019',
        type: 'photo',
      },
      {
        imageSrc: journey8.src,
        header: {
          en: 'Bali',
          ko: '발리',
        },
        description: {
          en: 'White water rafting in Bali with our friends',
          ko: '친구들과 발리에서 화이트 워터 래프팅을 즐겼어요',
        },
        date: '27.06.2019',
        type: 'photo',
      },
      {
        imageSrc: journey4.src,
        header: {
          en: 'Our Second Anniversary',
          ko: '우리 두 번째 기념일',
        },
        date: '12.08.2021',
        type: 'photo',
      },
      {
        imageSrc: journey9.src,
        header: {
          en: 'POST-COVID',
          ko: '코로나 이후',
        },
        description: {
          en: 'Finally reunited after circuit breaker to celebrate our birthdays!',
          ko: '서킷 브레이커 이후 드디어 다시 만나서 우리 생일을 축하했어요!',
        },
        date: '07.07.2020',
        type: 'photo',
      },
      {
        imageSrc: journey10.src,
        header: {
          en: 'Graduation',
          ko: '졸업',
        },
        description: {
          en: 'We graduated together from NUS in the same year!',
          ko: '같은 해에 우리는 NUS에서 함께 졸업했어요!',
        },
        date: '24.07.2022',
        type: 'photo',
      },
      {
        header: howWeGrown.header,
        description: howWeGrown.text,
        type: 'text',
      },
      {
        imageSrc: journey5.src,
        header: {
          en: 'Our Third Anniversary',
          ko: '우리 세 번째 기념일',
        },
        date: '12.08.2022',
        type: 'photo',
      },
      {
        imageSrc: journey11.src,
        header: {
          en: 'SHE',
          ko: '그녀',
        },
        date: '28.05.2022',
        type: 'photo',
      },
      {
        imageSrc: journey12.src,
        header: {
          en: 'SAID',
          ko: '가',
        },
        date: '28.05.2022',
        type: 'photo',
      },
      {
        imageSrc: journey13.src,
        header: {
          en: 'YES',
          ko: '네',
        },
        date: '28.05.2022',
        type: 'photo',
      },
      {
        imageSrc: journey14.src,
        date: '28.05.2022',
        type: 'photo',
      },
      {
        header: themeVerse.title,
        description: themeVerse.text,
        type: 'text',
      },
    ],
    []
  );

  const { language } = useAppContext();
  return (
    <Box textAlign="center">
      <Heading color="white" fontWeight="thin" textTransform="uppercase">
        {title.header[language]}
      </Heading>
      <Text color="white" fontSize="xs" mt={2}>
        {title.subtext[language]}
      </Text>
      <Box>
        {storyItems.map((story) => (
          <StoryCard card={story} />
        ))}
      </Box>
    </Box>
  );
}
