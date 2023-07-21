import { Box, Text, Image, Button, Switch, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { apiService } from '~/lib/api-service';
import { useAppContext } from '~/lib/contexts/AppContext';

export interface PendingImage {
  fid: number;
  created_at: string;
  updated_at: string;
  url: string;
  deleted: boolean;
  status: string;
  author_id: number;
  captions: string;
  User: {
    name: string;
  };
}

export default function AdminPage() {
  const [images, setImages] = useState<PendingImage[]>([]);
  const [toggle, setToggle] = useState(false);
  const { auth, activeLoginModal } = useAppContext();

  const fetchImages = async () => {
    const fetchedImages = await apiService.getPendingImages();
    setImages(fetchedImages);
  };

  const fetchToggle = async () => {
    const { showMessages } = await apiService.getShowMessage();
    setToggle(showMessages);
  };

  const approveImage = async (id: number) => {
    setImages(images.filter((im) => im.fid !== id));
    await apiService.approveImage(id);
  };

  const rejectImage = async (id: number) => {
    setImages(images.filter((im) => im.fid !== id));
    await apiService.rejectImage(id);
  };

  const toggleHandler = () => {
    apiService.setShowMessage(!toggle);
    setToggle(!toggle);
  };

  useEffect(() => {
    if (!auth.loggedIn) {
      activeLoginModal();
    } else if (auth.user?.isAdmin) {
      fetchImages();
      fetchToggle();
    }
  }, [auth]);

  return (
    <Box>
      <Text textAlign="center" fontSize="3xl" fontWeight="extrabold">
        Admin Page
      </Text>
      <Flex my={5} align="center">
        <Text fontSize="sm" mr={2}>
          Show messages:{' '}
        </Text>
        <Switch
          colorScheme="teal"
          size="md"
          onChange={toggleHandler}
          isChecked={toggle}
        />
      </Flex>
      {images.length > 0 &&
        images.map((image) => (
          <Box p={2} my={3} bg="white" borderRadius={4} key={image.fid}>
            <Image src={image.url} />
            <Text my={2} textAlign="center">
              {image.User.name}
            </Text>
            <Text my={1} textAlign="center" fontSize="xs">
              {image.captions}
            </Text>
            <Text my={1} textAlign="center" fontSize="xs" opacity={0.5}>
              {new Date(image.created_at).toLocaleString()}
            </Text>
            <Flex>
              <Button
                w="full"
                my={3}
                mx={2}
                color="white"
                bg="brand.200"
                onClick={() => approveImage(image.fid)}
              >
                Approve
              </Button>
              <Button
                w="full"
                my={3}
                mx={2}
                color="white"
                bg="brand.200"
                onClick={() => rejectImage(image.fid)}
              >
                Reject
              </Button>
            </Flex>
          </Box>
        ))}
    </Box>
  );
}
