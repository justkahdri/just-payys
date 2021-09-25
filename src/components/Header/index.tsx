import React from "react";
import {Icon, Stack} from "@chakra-ui/react";
import {AiOutlineUsergroupAdd, AiOutlineSearch} from "react-icons/ai";

const Header = () => {
  return (
    <Stack
      as="header"
      borderBottom="solid 1px"
      borderColor="gray.700"
      direction="row"
      justify="end"
      px={5}
      py={3}
      spacing={4}
    >
      <Icon as={AiOutlineSearch} boxSize={5} />
      <Icon as={AiOutlineUsergroupAdd} boxSize={5} />
    </Stack>
  );
};

export default Header;
