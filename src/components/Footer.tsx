import React, {useContext} from "react";
import {Flex, Icon, useColorModeValue} from "@chakra-ui/react";
import {VscGraph} from "react-icons/vsc";
import {RiGroupLine, RiHome2Line} from "react-icons/ri";
import {Location, Link} from "@reach/router";

import {PeopleContext} from "../contexts/PeopleProvider";

const Footer = () => {
  const iconSize = 5;
  const {people} = useContext(PeopleContext);
  const bg = useColorModeValue("primary.500", "gray.800");
  const disabled = useColorModeValue("blackAlpha.300", "blackAlpha.600");
  const selected = useColorModeValue("blackAlpha.800", "primary.400");

  const links = [
    {icon: RiHome2Line, route: "/", title: "Go to control panel"},
    {icon: VscGraph, route: "/balance", title: "Go to activity"},
    {icon: RiGroupLine, route: "/people", title: "Go to people"},
  ];

  return (
    <Location>
      {({location}) => (
        <Flex
          as="footer"
          bg={bg}
          borderTop="1px solid"
          // eslint-disable-next-line react/jsx-sort-props
          borderColor="gray.700"
          bottom={0}
          justify="space-evenly"
          p={3}
          position="sticky"
          width="100%"
        >
          {links.map((link) => {
            if (link.route !== "/people" && people.length < 2)
              return (
                <Icon
                  alignSelf="end"
                  aria-label={link.title}
                  as={link.icon}
                  boxSize={iconSize}
                  color={disabled}
                />
              );

            return (
              <Link key={link.title} to={link.route}>
                <Icon
                  aria-label={link.title}
                  as={link.icon}
                  boxSize={iconSize}
                  color={location.pathname == link.route ? selected : "white"}
                />
              </Link>
            );
          })}
        </Flex>
      )}
    </Location>
  );
};

export default Footer;
