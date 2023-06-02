import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { FaScroll } from 'react-icons/fa';
import { GiLovers } from 'react-icons/gi';
import { SiTestcafe } from 'react-icons/si';

import DashboardPopout from '~/lib/components/common/DashboardPopout';
import NavBar from '~/lib/components/common/NavBar';

const Home = () => {
  return (
    <Flex flexDir="column">
      <NextSeo title="Home" />
      <NavBar />
      <Text fontSize="2xl" fontWeight="bold" mt={3}>
        Welcome, guest
      </Text>
      <Flex my={5} justifyContent="space-between">
        <DashboardPopout>
          <Icon as={FaScroll} fontSize="5xl" />
          <Text fontSize="xl" fontWeight="bold">
            Program
          </Text>
        </DashboardPopout>
        <DashboardPopout>
          <Icon as={GiLovers} fontSize="5xl" />
          <Text fontSize="xl" fontWeight="bold">
            Journey
          </Text>
        </DashboardPopout>
      </Flex>
      <DashboardPopout
        attr={{
          flexDir: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          borderRadius: 15,
          w: '100%',
          h: '100px',
        }}
      >
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            Two truths
          </Text>
          <Text fontSize="xl" fontWeight="bold">
            One lie
          </Text>
        </Box>

        <Icon as={SiTestcafe} fontSize="5xl" />
      </DashboardPopout>
    </Flex>
  );
};

export default Home;
