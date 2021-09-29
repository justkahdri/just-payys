import React from "react";
import Link from "next/link";
import {Flex, Icon} from "@chakra-ui/react";
import {VscGraph} from "react-icons/vsc";
import {HiOutlineUserGroup} from "react-icons/hi";
import {RiGroupLine} from "react-icons/ri";
import {useRouter} from "next/router";

const Footer = () => {
  const iconSize = 5;
  const {pathname} = useRouter();

  const links = [
    {icon: VscGraph, route: "/", title: "Go to activity"},
    {icon: RiGroupLine, route: "/people", title: "Go to people"},
    {icon: HiOutlineUserGroup, route: "/groups", title: "Go to groups"},
  ];

  return (
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
        <Link key={link.title} href={link.route}>
          <a>
            <Icon
              aria-label={link.title}
              as={link.icon}
              boxSize={iconSize}
              color={pathname == link.route ? "purple.400" : "white"}
            />
          </a>
        </Link>
      ))}
    </Flex>
  );
};

export default Footer;
