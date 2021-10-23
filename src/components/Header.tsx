import React from "react";
import {Icon, Stack, Heading, Flex} from "@chakra-ui/react";
import {AiOutlineUsergroupAdd, AiOutlineSearch} from "react-icons/ai";

const Header = () => {
  return (
    <Flex
      align="center"
      as="header"
      borderBottom="solid 1px"
      borderColor="gray.700"
      direction="row"
      justify="space-between"
      px={5}
      py={3}
    >
      <Heading size="md">JustPayys</Heading>
      <Stack as="nav" direction="row" spacing={4}>
        <Icon as={AiOutlineSearch} boxSize={5} />
        <Icon as={AiOutlineUsergroupAdd} boxSize={5} />
      </Stack>
    </Flex>
  );
};

export default Header;
