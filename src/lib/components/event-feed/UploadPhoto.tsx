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
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { BiCloudUpload } from 'react-icons/bi';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import { MdOutlineAddAPhoto, MdFileDownloadDone } from 'react-icons/md';

import PrimaryButton from '../common/PrimaryButton';
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
  const { uploadFeed } = useFeedContext();

  const submitHandler = async () => {
    setFormState(formStateEnum.SUBMITTING);
    if (image) await uploadFeed(image);
    setFormState(formStateEnum.SUBMITTED);
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
        as={motion.div}
        display="flex"
        position="fixed"
        bg="brand.100"
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
            onClick={() => setFormState(formStateEnum.OPENED)}
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
          >
            <Box position="fixed" inset="0 0 0 0" bg="brand.100" color="white">
              <Box w="80%" mx="auto">
                <Heading
                  fontSize="3xl"
                  textAlign="center"
                  mt={9}
                  textTransform="uppercase"
                  fontWeight="light"
                >
                  Share your special moments with us
                </Heading>
                <Text
                  fontSize="sm"
                  textAlign="center"
                  mt={5}
                  fontWeight="normal"
                >
                  Whether it&apos;s a candid shot of the happy couple or a
                  fun-filled moment from the celebration or an unglam photo of
                  the groom, your photos will help create a lasting treasure
                </Text>
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
                      w="130px"
                      h="130px"
                    />
                  ) : (
                    <Icon
                      as={BiCloudUpload}
                      fontWeight="normal"
                      w="130px"
                      h="130px"
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
                  placeholder="Write a caption for the photo"
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
                    Share
                  </PrimaryButton>
                  <PrimaryButton
                    w="50%"
                    mt={5}
                    px={5}
                    onClick={cancelHandler}
                    variant="outline"
                  >
                    Cancel
                  </PrimaryButton>
                </Flex>
              </Flex>
            </Box>
          </motion.div>
        )}
      </Box>
    </AnimatePresence>
  );
}
