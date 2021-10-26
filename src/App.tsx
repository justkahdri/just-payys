import React from "react";
import {ChakraProvider} from "@chakra-ui/react";
import {Flex} from "@chakra-ui/react";
import {Router} from "@reach/router";

import customTheme from "./theme";
import {NewExpensePage, PeoplePage, ControlPanel, Header, Footer} from "./components";

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Flex direction="column" id="app" minH="100vh">
        <Header />
        <Flex as="main" direction="column" flex={1} p={5}>
          <Router>
            <ControlPanel path="/" />
            <PeoplePage path="/people" />
            <NewExpensePage path="/new-expense" />
          </Router>
        </Flex>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
};

export default App;
