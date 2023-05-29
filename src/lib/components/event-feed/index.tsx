import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import { useReelsContext } from '~/lib/contexts/ReelsContext';

import FeedCard from './FeedCard';
import UploadPhoto from './UploadPhoto';

export default function EventFeed() {
  const { reels } = useReelsContext();
  return (
    <Box>
      <Tabs>
        <TabList justifyContent="center">
          <Tab
            textTransform="uppercase"
            _selected={{ color: 'brand.200', fontWeight: 'extrabold' }}
          >
            Popular
          </Tab>
          <Tab
            textTransform="uppercase"
            _selected={{ color: 'brand.200', fontWeight: 'extrabold' }}
          >
            Latest
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            {reels.map((reel) => (
              <FeedCard reel={reel} />
            ))}
          </TabPanel>
          <TabPanel>
            {reels.map((reel) => (
              <FeedCard reel={reel} />
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>

      <UploadPhoto />
    </Box>
  );
}
