import React, {FC} from "react";
import {Stack, Avatar, Heading, Text, Flex, LinkBox} from "@chakra-ui/react";
import {default as NextLink} from "next/link";

interface Props {
  name: string;
  id: string;
  balance: number;
}

const ListedItem: FC<Props> = ({name, id, balance, children}) => (
  <NextLink href="/groups">
    <LinkBox>
      <Stack align="center" direction="row" overflow="hidden">
        <Avatar name={name} src="https://bit.ly/broken-url" />
        <Flex direction="column">
          <Heading as="h4" fontSize="md">
            {name}
          </Heading>
          <Text color="gray.400" fontSize="sm" lineHeight="normal">
            #{id}
          </Text>
          {children}
        </Flex>
        <Stack align="end" flex={1}>
          <Flex color="green.400" direction="column" justify="center" textAlign="end">
            <Text fontSize="xs">{balance > 0 ? "they owe you" : "you owe"}</Text>
            <Text fontSize="sm" fontWeight={500}>
              ${Math.abs(balance).toFixed(2).toLocaleString()}
            </Text>
          </Flex>
        </Stack>
      </Stack>
    </LinkBox>
  </NextLink>
);

export const ListedPerson = (props: PersonT) => <ListedItem balance={32.2} {...props} />;

export const ListedGroup = (props: GroupT) => (
  <ListedItem balance={-12.43} {...props}>
    <Text color="green.500" fontSize="xs">
      You and {props.members.length - 1} more
    </Text>
  </ListedItem>
);

export default ListedItem;
