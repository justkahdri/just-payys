import React from "react";
import {ChakraProvider} from "@chakra-ui/react";

import customTheme from "./theme";
import Layout from "./Layout";
import {MainProvider} from "./contexts";

const App = () => {
  return (
    <MainProvider>
      <ChakraProvider theme={customTheme}>
        <Layout />
      </ChakraProvider>
    </MainProvider>
  );
};

export default App;
