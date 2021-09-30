import React from "react";
import type {AppProps} from "next/app";
import {ChakraProvider} from "@chakra-ui/react";

import customTheme from "../theme";

import {MainProvider} from "@contexts";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <MainProvider>
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </MainProvider>
  );
}
export default MyApp;
