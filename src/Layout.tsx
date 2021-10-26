import React from "react";
import {Flex} from "@chakra-ui/react";
import {Router} from "@reach/router";

import {NewExpensePage, PeoplePage, ControlPanel, Header, Footer} from "./components";

const Layout = () => (
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
);

export default Layout;
