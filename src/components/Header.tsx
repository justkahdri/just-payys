import React from "react";
import {Icon, Stack, Heading, Flex, useColorMode, Link} from "@chakra-ui/react";
import {FaBug} from "react-icons/fa";
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
          boxSize={5}
          onClick={toggleColorMode}
        />
        <Link
          isExternal
          aria-label="Report a bug"
          href="https://github.com/justkahdri/just-payys/issues/new"
        >
          <Icon aria-label="Report a bug" as={FaBug} boxSize={5} mb={0.5} />
        </Link>
      </Stack>
    </Flex>
  );
};

export default Header;
