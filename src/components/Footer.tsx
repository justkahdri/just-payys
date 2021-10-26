import React from "react";
import {Flex, Icon} from "@chakra-ui/react";
import {VscGraph} from "react-icons/vsc";
import {RiGroupLine, RiHome2Line} from "react-icons/ri";
import {Location, Link} from "@reach/router";

const Footer = () => {
  const iconSize = 5;

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
          bg="gray.800"
          borderTop="1px solid"
          // eslint-disable-next-line react/jsx-sort-props
          borderColor="gray.700"
          bottom={0}
          justify="space-evenly"
          p={3}
          position="sticky"
          width="100%"
        >
          {links.map((link) => (
            <Link key={link.title} to={link.route}>
              <Icon
                aria-label={link.title}
                as={link.icon}
                boxSize={iconSize}
                color={location.pathname == link.route ? "primary.400" : "white"}
              />
            </Link>
          ))}
        </Flex>
      )}
    </Location>
  );
};

export default Footer;
