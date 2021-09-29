import React, {FC, useContext} from "react";
import {Stack, Avatar, Heading, Text, Flex, LinkBox} from "@chakra-ui/react";
import {default as NextLink} from "next/link";

import {PeopleContext} from "@contexts";

interface Props {
  name: string;
  id: string;
  balance?: number;
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
          {balance ? (
            <Flex color="green.400" direction="column" justify="center" textAlign="end">
              <Text fontSize="xs">{balance > 0 ? "they owe you" : "you owe"}</Text>
              <Text fontSize="sm" fontWeight={500}>
                ${Math.abs(balance).toFixed(2).toLocaleString()}
              </Text>
            </Flex>
          ) : (
            <Text color="gray.400" direction="column" fontSize="sm" textAlign="end">
              {
                balance == 0 ? "No debts" : "No expenses"
                /* If balance is defined shows no debts, 
                otherwise there is no expenses */
              }
            </Text>
          )}
        </Stack>
      </Stack>
    </LinkBox>
  </NextLink>
);

export const ListedPerson = (props: PersonT) => <ListedItem {...props} />;

export const ListedGroup = (props: GroupT) => {
  const {getPersonById} = useContext(PeopleContext);
  const memeberName = getPersonById(props.members[0])?.name;
  const ending =
    props.members.length > 2
      ? `${props.members.length - 1} more`
      : getPersonById(props.members[1])?.name;

  return (
    <ListedItem balance={0} {...props}>
      <Text color="green.500" fontSize="xs">
        {memeberName} and {ending}
      </Text>
    </ListedItem>
  );
};

export default ListedItem;
