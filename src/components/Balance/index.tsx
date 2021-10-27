import React, {useContext} from "react";
import {RouteComponentProps, Redirect} from "@reach/router";
import {Stack, Text, Flex} from "@chakra-ui/layout";

import {PeopleContext} from "../../contexts/PeopleProvider";

const BalancePage = (_: RouteComponentProps) => {
  const {people} = useContext(PeopleContext);

  if (people.length < 2) return <Redirect noThrow to="/people" />;

  return (
    <Stack>
      {people
        .filter((p) => p.personal_balance !== 0)
        .map((person) => (
          <Flex
            key={person.id}
            align="center"
            justify="space-between"
            p={2}
            rounded="sm"
            shadow="md"
          >
            <Text as="h4">{person.name}</Text>
            <Text color={person.personal_balance > 0 ? "secondary.300" : "red.300"} fontSize="sm">
              {person.personal_balance > 0 ? "Receives " : "Owes "}$
              {Math.abs(person.personal_balance)}
            </Text>
          </Flex>
        ))}
    </Stack>
  );
};

export default BalancePage;
