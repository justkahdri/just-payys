import React from "react";
import {Box, Flex} from "@chakra-ui/react";

import Header from "@components/Header";
import Footer from "@components/Footer";
import AddExpenseModal from "@components/AddExpenseModal";

const Layout: React.FC = ({children}) => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Box as="main" flex={1} p={5} position="relative">
        {children}
        <AddExpenseModal />
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
