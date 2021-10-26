/* eslint-disable @typescript-eslint/no-explicit-any */
import {extendTheme, theme} from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools";

const customTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    primary: theme.colors.purple,
    secondary: theme.colors.whatsapp,
  },
  styles: {
    global: (props: any) => ({
      body: {
        minHeight: "100vh",
        backgroundColor: mode("gray.50", "gray.900")(props),
        padding: {
          base: 0,
          md: 4,
        },
      },
    }),
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "primary",
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
    Badge: {
      variants: {
        outline: (props: any) => ({
          color: `${props.colorScheme}.700`,
          boxShadow: `inset 0 0 0px 1px ${props.theme["colors"][props.colorScheme][700]}`,
          ".chakra-ui-dark &": {
            color: `${props.colorScheme}.200`,
            boxShadow: `inset 0 0 0px 1px ${props.theme["colors"][props.colorScheme][200]}`,
          },
        }),
      },
    },
  },
  textStyles: {
    soft: {
      color: "blackAlpha.700",
      ".chakra-ui-dark &": {
        color: "whiteAlpha.700",
      },
    },
    link: {
      "&": {
        color: "primary.500",
      },
      ".chakra-ui-dark &": {
        color: "primary.400",
      },
    },
    success: {
      color: "green.600",
      ".chakra-ui-dark &": {
        color: "green.300",
      },
    },
  },
});

export default customTheme;
