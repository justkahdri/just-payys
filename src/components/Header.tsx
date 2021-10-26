import React from "react";
import {Icon, Stack, Heading, Flex, useColorMode} from "@chakra-ui/react";
import {AiOutlineUsergroupAdd, AiOutlineSearch} from "react-icons/ai";
import {BsFillSunFill, BsFillMoonFill} from "react-icons/bs";

const Header = () => {
  const {toggleColorMode, colorMode} = useColorMode();

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
      <Stack align="center" as="nav" direction="row" spacing={4}>
        <Icon
          as={colorMode === "light" ? BsFillMoonFill : BsFillSunFill}
          boxSize={4}
          onClick={toggleColorMode}
        />
        <Icon as={AiOutlineSearch} boxSize={5} />
        <Icon as={AiOutlineUsergroupAdd} boxSize={5} />
      </Stack>
    </Flex>
  );
};

export default Header;
