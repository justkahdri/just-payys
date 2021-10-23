import React from "react";
import {ChakraProvider, ColorModeProvider} from "@chakra-ui/react";
import {Flex, Box} from "@chakra-ui/react";

import customTheme from "./theme";
import ExpenseForm from "./components/ExpenseForm";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <ColorModeProvider options={{}}>
        <Flex direction="column" id="app" minH="100vh">
          <Header />
          <Box as="main" flex={1} p={5} position="relative">
            <ExpenseForm />
          </Box>
          <Footer />
        </Flex>
      </ColorModeProvider>
    </ChakraProvider>
  );
};

export default App;
