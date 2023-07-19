import { Flex, Heading, Icon } from '@chakra-ui/react';
import { MdLogout } from 'react-icons/md';

import { useAppContext } from '../contexts/AppContext';
import navbarBackground from '~/assets/navbar-background.png';

const Header = () => {
  const { auth, logout } = useAppContext();
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
      pos="relative"
    >
      <Heading color="#F5F5F5" fontSize="md" fontWeight="bold">
        #mattyubygrace
      </Heading>
      {auth.loggedIn && (
        <Icon
          as={MdLogout}
          color="white"
          pos="absolute"
          right={4}
          onClick={logout}
        />
      )}
    </Flex>
  );
};

export default Header;
