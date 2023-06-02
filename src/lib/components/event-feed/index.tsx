import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import { useFeedContext } from '~/lib/contexts/FeedContext';

import FeedCard from './FeedCard';
import UploadPhoto from './UploadPhoto';

export default function EventFeed() {
  const { feed } = useFeedContext();
  if (!feed.length) {
    return null;
  }
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
            {feed.map((feedItem) => (
              <FeedCard feed={feedItem} />
            ))}
          </TabPanel>
          <TabPanel>
            {feed.map((feedItem) => (
              <FeedCard feed={feedItem} />
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>

      <UploadPhoto />
    </Box>
  );
}
