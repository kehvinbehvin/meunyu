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
import { useEffect, useMemo, useState } from 'react';
import Select from 'react-select';

import PrimaryButton from '../common/PrimaryButton';
import { useAppContext } from '~/lib/contexts/AppContext';

export default function LoginModal() {
  const { auth, isLoading, login, triggerModal, allUsers } = useAppContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOption, setSelectedOption] = useState<{
    value: string;
    label: string;
  } | null>(null);

  useEffect(() => {
    if (!auth.loggedIn && !isLoading) {
      onOpen();
    }
  }, [triggerModal]);

  const options = useMemo(() => {
    return allUsers.length
      ? allUsers.map((user) => ({
          value: user.slug,
          label: user.connection
            ? `${user.name} (${user.connection})`
            : user.name,
        }))
      : [];
  }, [allUsers]);

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
          <Heading fontSize="lg" textAlign="center" mb={4} mt={4}>
            Sign in for full access to the site
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
