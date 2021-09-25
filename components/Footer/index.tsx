import React from "react";
import {Flex, Icon} from "@chakra-ui/react";
import {VscGraph} from "react-icons/vsc";
import {HiOutlineUserGroup} from "react-icons/hi";
import {RiGroupLine} from "react-icons/ri";

const Footer = () => {
  const iconSize = 5;

  return (
    // eslint-disable-next-line react/jsx-sort-props
    <Flex borderTop="1px solid" borderColor="gray.700" justify="space-evenly" p={3}>
      <Icon as={VscGraph} boxSize={iconSize} color="purple.400" />
      <Icon as={RiGroupLine} boxSize={iconSize} />
      <Icon as={HiOutlineUserGroup} boxSize={iconSize} />
    </Flex>
  );
};

export default Footer;
