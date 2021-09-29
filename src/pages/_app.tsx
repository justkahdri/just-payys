import React from "react";
import type {AppProps} from "next/app";
import {ChakraProvider} from "@chakra-ui/react";

import customTheme from "../theme";

import {PeopleProvider, GroupsProvider} from "@contexts";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <GroupsProvider>
      <PeopleProvider>
        <ChakraProvider theme={customTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </PeopleProvider>
    </GroupsProvider>
  );
}
export default MyApp;
