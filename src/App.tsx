import React from "react";
import {ChakraProvider} from "@chakra-ui/react";

import customTheme from "./theme";
import Layout from "./Layout";
import PeopleProvider from "./contexts/PeopleProvider";

const App = () => {
  return (
    <PeopleProvider>
      <ChakraProvider theme={customTheme}>
        <Layout />
      </ChakraProvider>
    </PeopleProvider>
  );
};

export default App;
