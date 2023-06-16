import { Text, Flex, Image } from '@chakra-ui/react';

import HeaderSmiley from '../../assets/header-smiley.png';

const Header = () => {
  return (
    <Flex as="header" width="full" align="center" justify="center" pt={9}>
      <Text color="#F5F5F5">#mattyubygrace</Text>
      <Image src={HeaderSmiley.src} pos="absolute" right={0} />
    </Flex>
  );
};

export default Header;
