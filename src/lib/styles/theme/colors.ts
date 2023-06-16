import type { DeepPartial, Theme } from '@chakra-ui/react';

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme['colors']['blackAlpha']>
> = {
  brand: {
    100: '#CACAB4',
    200: '#042A2B',
    300: '#EF7B45',
    400: '#D84727',
    500: '#00A7E1',
    600: '',
    700: '',
    800: '',
    900: '',
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};
