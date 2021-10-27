import React from "react";
import {Flex} from "@chakra-ui/react";
import {Redirect, Router} from "@reach/router";

import {NewExpensePage, PeoplePage, ControlPanel, Header, Footer, BalancePage} from "./components";

const Layout = () => (
  <Flex direction="column" id="app" minH="100vh">
    <Header />
    <Flex as="main" direction="column" flex={1} py={5}>
      <Router>
        <ControlPanel path="/" />
        <PeoplePage path="/people" />

        <Redirect noThrow from="/expense" to="/new-expense" />
        <NewExpensePage path="/new-expense" />

        <Redirect noThrow from="/total" to="/balance" />
        <BalancePage path="/balance" />
      </Router>
    </Flex>
    <Footer />
  </Flex>
);

export default Layout;
