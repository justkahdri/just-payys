import React from "react";
import {Box, Flex, Button} from "@chakra-ui/react";
import {IoReceiptOutline} from "react-icons/io5";

import Header from "@components/Header";
import Footer from "@components/Footer";

const Layout: React.FC = ({children}) => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Box as="main" flex={1} p={5} pb={0} position="relative">
        {children}
        <Button
          bottom={3}
          colorScheme="purple"
          leftIcon={<IoReceiptOutline />}
          position="absolute"
          right={5}
        >
          Add expense
        </Button>
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
