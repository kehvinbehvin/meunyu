import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
  Text,
  Heading,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Select from 'react-select';

import PrimaryButton from '../common/PrimaryButton';
import { useAppContext } from '~/lib/contexts/AppContext';

export default function LoginModal() {
  const { auth, isLoading, login, triggerModal } = useAppContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOption, setSelectedOption] = useState<{
    value: string;
    label: string;
  } | null>(null);

  useEffect(() => {
    if (!auth.loggedIn && !isLoading) {
      setTimeout(() => onOpen(), 750);
    }
  }, [auth, isLoading]);

  useEffect(() => {
    if (!auth.loggedIn && !isLoading) {
      onOpen();
    }
  }, [triggerModal]);

  const options = [
    { value: 'kevin-123', label: 'Kevin' },
    { value: 'garei-123', label: 'Garei' },
    { value: 'zach-123', label: 'Zach' },
  ];

  const loginButtonHandler = () => {
    if (selectedOption) {
      login(selectedOption.value);
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent bg="#FFFFF5" color="brand.200">
        <ModalCloseButton />
        <ModalBody mt={9}>
          <Heading fontSize="lg" textAlign="center" mb={3}>
            Log in for full access to the website.
          </Heading>

          <Select
            options={options}
            placeholder="Your name"
            onChange={setSelectedOption}
          />
        </ModalBody>

        <ModalFooter
          textAlign="center"
          justifyContent="center"
          flexDir="column"
        >
          <PrimaryButton
            bg="brand.200"
            color="white"
            my={3}
            onClick={loginButtonHandler}
          >
            Log In
          </PrimaryButton>
          <Text fontSize="xs" onClick={onClose}>
            Continue without logging in
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
