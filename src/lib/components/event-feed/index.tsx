import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import { useFeedContext } from '~/lib/contexts/FeedContext';

import FeedCard from './FeedCard';
import UploadPhoto from './UploadPhoto';

export default function EventFeed() {
  const { feed } = useFeedContext();
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
            {feed &&
              feed.map((feedItem) => (
                <FeedCard key={feedItem.created_at} feed={feedItem} />
              ))}
          </TabPanel>
          <TabPanel>
            {feed &&
              feed.map((feedItem) => (
                <FeedCard key={feedItem.created_at} feed={feedItem} />
              ))}
          </TabPanel>
        </TabPanels>
      </Tabs>

      <UploadPhoto />
    </Box>
  );
}
