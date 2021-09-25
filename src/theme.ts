import {extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "gray.900",
        color: "white",
      },
      // styles for the `a`
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
  colors: {
    // brand: {
    //   100: "#f7fafc",
    //   // ...
    //   900: "#1a202c",
    // },
  },
  components: {
    // Button: {
    //   // 1. We can update the base styles
    //   baseStyle: {
    //     fontWeight: "bold", // Normally, it is "semibold"
    //   },
    //   // 2. We can add a new button size or extend existing
    //   sizes: {
    //     xl: {
    //       h: "56px",
    //       fontSize: "lg",
    //       px: "32px",
    //     },
    //   },
    //   // 3. We can add a new visual variant
    //   variants: {
    //     "with-shadow": {
    //       bg: "red.400",
    //       boxShadow: "0 0 2px 2px #efdfde",
    //     },
    //     // 4. We can override existing variants
    //     solid: (props) => ({
    //       bg: props.colorMode === "dark" ? "red.300" : "red.500",
    //     }),
    //   },
    // },
  },
});

export default theme;
