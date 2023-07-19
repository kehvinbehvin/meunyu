/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  Textarea,
  keyframes,
  useToast,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { BiCloudUpload } from 'react-icons/bi';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import { MdOutlineAddAPhoto, MdFileDownloadDone } from 'react-icons/md';
import { useWindowSize } from 'usehooks-ts';

import PrimaryButton from '../common/PrimaryButton';
import { useAppContext } from '~/lib/contexts/AppContext';
import { appCopy } from '~/lib/contexts/AppCopy';
import { useFeedContext } from '~/lib/contexts/FeedContext';

const formStateEnum = {
  UNOPENED: 'unopened',
  OPENED: 'opened',
  SUBMITTING: 'submitting',
  SUBMITTED: 'submitted',
};

export default function UploadPhoto() {
  const [formState, setFormState] = useState(formStateEnum.UNOPENED);
  const [image, setImage] = useState<File | null>(null);
  const modalRef = useRef(null);
  const captionRef = useRef<HTMLTextAreaElement>(null);
  const { auth, activeLoginModal, language } = useAppContext();
  const { uploadFeed } = useFeedContext();
  const { title, subtext } = appCopy.feed.upload;
  const { share, cancel } = appCopy.common;
  const toast = useToast();
  const { height } = useWindowSize();

  const submitHandler = async () => {
    try {
      setFormState(formStateEnum.SUBMITTING);
      if (image)
        await uploadFeed(
          image,
          (captionRef.current as HTMLTextAreaElement).value
        );
      setFormState(formStateEnum.SUBMITTED);
      toast({
        title: 'Image uploaded',
        description: 'Our friendly admins will be approving your image shortly',
        status: 'success',
        position: 'top',
        isClosable: true,
        duration: 5000,
      });
    } catch (err) {
      // eslint-disable-next-line no-alert
      alert((err as Error).message);
      setFormState(formStateEnum.OPENED);
    }
  };

  const cancelHandler = async () => {
    setFormState(formStateEnum.UNOPENED);
  };

  const selectImageHandler = ({ target }: { target: HTMLInputElement }) => {
    if (target.files) setImage(target.files[0]);
  };

  useEffect(() => {
    // automatically switch back to unopened state
    if (formState === formStateEnum.SUBMITTED) {
      setTimeout(() => setFormState(formStateEnum.UNOPENED), 2000);
    }
  }, [formState]);

  const animationKeyframes = keyframes`
    0% { transform: translate(-50%,-45%) }
    50% { transform: translate(-50%, -68%) }
    100% { transform: translate(-50%,-45%) }
  `;

  const animation = `${animationKeyframes} 1s ease-in-out infinite`;

  const variants = {
    opened: () => ({
      clipPath: `circle(${1000 * 2 + 200}px at 85% 85%)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    submitting: () => ({
      clipPath: `circle(30px at 85% 85%)`,
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    }),
    unopened: {
      clipPath: `circle(30px at 85% 85%)`,
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <AnimatePresence>
      <Box
        maxW="500px"
        mx="auto"
        as={motion.div}
        display="flex"
        position="fixed"
        bg="brand.200"
        inset="0 0 0 0"
        p={5}
        alignItems="center"
        justifyContent="center"
        fontWeight="extrabold"
        initial={false}
        variants={variants}
        animate={formState}
        ref={modalRef}
      >
        {formState === formStateEnum.UNOPENED && (
          <Icon
            position="absolute"
            left="85%"
            top="85%"
            transform="translate(-50%,-50%)"
            as={MdOutlineAddAPhoto}
            color="white"
            w="20px"
            h="20px"
            onClick={() => {
              if (auth.loggedIn) {
                setFormState(formStateEnum.OPENED);
              } else {
                activeLoginModal();
              }
            }}
          />
        )}
        {formState === formStateEnum.SUBMITTING && (
          <Box
            as={motion.div}
            display="flex"
            alignItems="center"
            justifyContent="center"
            animation={animation}
            position="absolute"
            left="85%"
            top="85%"
            color="white"
            transform="translate(-50%,-50%)"
          >
            <Icon as={BsArrowUpCircleFill} w="20px" h="20px" />
          </Box>
        )}
        {formState === formStateEnum.SUBMITTED && (
          <Box
            as={motion.div}
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="absolute"
            left="85%"
            top="85%"
            color="white"
            transform="translate(-50%,-50%)"
          >
            <Icon as={MdFileDownloadDone} w="20px" h="20px" />
          </Box>
        )}
        <AnimatePresence>
          {formState === formStateEnum.OPENED && (
            <motion.div
              style={{
                backgroundColor: '#020202',
                color: 'white',
                position: 'fixed',
                left: 0,
                top: 0,
                height: '100vh',
                width: '100vw',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Box
                position="fixed"
                inset="0 0 0 0"
                bg="brand.200"
                color="white"
              >
                <Box w="80%" mx="auto">
                  <Heading
                    fontSize="3xl"
                    textAlign="center"
                    mt={9}
                    textTransform="uppercase"
                    fontWeight="light"
                  >
                    {title[language]}
                  </Heading>
                  {height > 700 && (
                    <Text
                      fontSize="sm"
                      textAlign="center"
                      mt={5}
                      fontWeight="normal"
                    >
                      {subtext[language]}
                    </Text>
                  )}
                  <Box
                    mx="auto"
                    as={motion.div}
                    whileTap={{ scale: 0.9 }}
                    border="1px dotted white"
                    mt={5}
                    width="fit-content"
                    p={3}
                    position="relative"
                  >
                    {image ? (
                      <Image
                        src={URL.createObjectURL(image)}
                        w={height > 700 ? '130px' : '80px'}
                        h={height > 700 ? '130px' : '80px'}
                      />
                    ) : (
                      <Icon
                        as={BiCloudUpload}
                        fontWeight="normal"
                        w={height > 700 ? '130px' : '80px'}
                        h={height > 700 ? '130px' : '80px'}
                      />
                    )}
                    <label
                      htmlFor="file-upload"
                      className="custom-file-upload"
                      style={{ position: 'absolute', inset: '0 0 0 0' }}
                    />
                    <input
                      id="file-upload"
                      type="file"
                      style={{ display: 'none' }}
                      onChange={selectImageHandler}
                    />
                  </Box>
                </Box>
                <Flex
                  w="80%"
                  mx="auto"
                  mt={5}
                  flexDir="column"
                  alignItems="center"
                >
                  <Textarea
                    mx="auto"
                    fontSize="md"
                    ref={captionRef}
                    placeholder="Write a caption for the photo"
                    _placeholder={{ color: 'brand.300', opacity: 0.2 }}
                  />
                  <Flex>
                    <PrimaryButton
                      w="50%"
                      mt={5}
                      px={5}
                      onClick={submitHandler}
                      variant="solid"
                      mr={3}
                    >
                      {share[language]}
                    </PrimaryButton>
                    <PrimaryButton
                      w="50%"
                      bg="transparent"
                      color="brand.300"
                      border="1px solid"
                      borderColor="brand.300"
                      mt={5}
                      px={5}
                      onClick={cancelHandler}
                      variant="outline"
                    >
                      {cancel[language]}
                    </PrimaryButton>
                  </Flex>
                </Flex>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </AnimatePresence>
  );
}
