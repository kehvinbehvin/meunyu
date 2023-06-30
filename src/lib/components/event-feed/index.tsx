import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import FramerFadeIn from '../common/FramerFadeIn';
import { useFeedContext } from '~/lib/contexts/FeedContext';

import FeedCard from './FeedCard';
import UploadPhoto from './UploadPhoto';

export default function EventFeed() {
  const { feed } = useFeedContext();
  return (
    <Box>
      <FramerFadeIn>
        <Tabs>
          <TabList justifyContent="center">
            <Tab
              textTransform="uppercase"
              color="brand.200"
              fontWeight="extrabold"
              _selected={{ color: 'green.800' }}
            >
              Popular
            </Tab>
            <Tab
              textTransform="uppercase"
              color="brand.200"
              fontWeight="extrabold"
              _selected={{ color: 'green.800' }}
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
      </FramerFadeIn>

      <UploadPhoto />
    </Box>
  );
}
