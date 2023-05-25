import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { BiCloudUpload } from 'react-icons/bi';
import { MdOutlineAddAPhoto } from 'react-icons/md';

import { useDimensions } from '~/lib/hooks/use-dimensions';

const formStateEnum = {
  UNOPENED: 'unopened',
  OPENED: 'opened',
  SUBMITTING: 'submitting',
  SUBMITTED: 'submitted',
};

export default function UploadPhoto() {
  const [formState, setFormState] = useState(formStateEnum.UNOPENED);
  const [image, setImage] = useState(null);
  const modalRef = useRef(null);
  const { height } = useDimensions(modalRef);

  const submitHandler = async () => {
    setFormState(formStateEnum.UNOPENED);
  };

  const variants = {
    opened: (height = 1000) => ({
      clipPath: `circle(${1000 * 2 + 200}px at 85% 85%)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    submitting: (height = 1000) => ({
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
        bg="brand.200"
        inset="0 0 0 0"
        p={5}
        alignItems="center"
        justifyContent="center"
        fontWeight="extrabold"
        initial={false}
        variants={variants}
        custom={height}
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
            onClick={() => setFormState(formStateEnum.OPENED)}
          />
        )}
        {formState === formStateEnum.SUBMITTING && (
          <Box top="85%">Uploading your photo</Box>
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
            <Box position="fixed" inset="0 0 0 0" bg="brand.200" color="white">
              <Box w="80%" mx="auto">
                <Text fontSize="3xl" textAlign="center" mt={5}>
                  Share your special moments
                </Text>
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
                    onChange={(e) => setImage(e.target.files[0])}
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
                  fontSize="xs"
                  placeholder="Write a caption for the photo"
                />
                <Flex>
                  <Button
                    w="50%"
                    mt={5}
                    onClick={submitHandler}
                    variant="solid"
                    mr={3}
                  >
                    Submit
                  </Button>
                  <Button
                    w="50%"
                    mt={5}
                    onClick={() => setFormState(formStateEnum.UNOPENED)}
                    variant="outline"
                  >
                    Cancel
                  </Button>
                </Flex>
              </Flex>
            </Box>
          </motion.div>
        )}
      </Box>
    </AnimatePresence>
  );
}
