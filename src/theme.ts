import {extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  components: {
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
