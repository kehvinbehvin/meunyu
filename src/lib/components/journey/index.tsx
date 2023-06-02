import { Box, Button } from '@chakra-ui/react';
import { useState } from 'react';
import type { Story } from 'react-insta-stories/dist/interfaces';

import DashboardPopout from '../common/DashboardPopout';
import CoupleGallery from '../couple-gallery';

import InstaStory from './InstaStory';

export default function OurJourney() {
  const storyContent: Story[] = [
    {
      url: 'https://picsum.photos/1000/1000?random=1',
      title: 'Theatre',
      caption:
        'Cillum Lorem adipisicing deserunt aute aute qui dolor labore laboris elit Lorem.',
    },
    {
      url: 'https://picsum.photos/1000/1000?random=2',
      title: 'Proposal',
      caption:
        'Cillum Lorem adipisicing deserunt aute aute qui dolor labore laboris elit Lorem.',
    },
  ];

  const [showReels, setShowReels] = useState(false);
  return (
    <Box>
      <DashboardPopout attr={{ w: '100%', mt: 5 }}>
        <CoupleGallery />
      </DashboardPopout>
      <DashboardPopout attr={{ w: '100%', mt: 5 }}>
        <Button onClick={() => setShowReels(true)}>Show reels</Button>
      </DashboardPopout>

      {showReels && (
        <InstaStory stories={storyContent} setShowReels={setShowReels} />
      )}
      <DashboardPopout attr={{ w: '100%', mt: 5 }}>
        <CoupleGallery />
      </DashboardPopout>
    </Box>
  );
}
