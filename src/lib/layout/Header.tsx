import { Flex, Heading } from '@chakra-ui/react';

import navbarBackground from '~/assets/navbar-background.png';

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      justify="center"
      backgroundImage={navbarBackground.src}
      h="60px"
      backgroundSize="cover"
      bgRepeat="no-repeat"
    >
      <Heading color="#F5F5F5" fontSize="md" fontWeight="bold">
        #mattyubygrace
      </Heading>
    </Flex>
  );
};

export default Header;
