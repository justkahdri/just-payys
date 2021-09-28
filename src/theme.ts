import {extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  components: {
    Button: {
      defaultProps: {
        colorScheme: "purple",
      },
    },
    Input: {
      defaultProps: {
        variant: "flushed",
      },
    },
    NumberInput: {
      defaultProps: {
        variant: "flushed",
      },
    },
  },
});

export default theme;
