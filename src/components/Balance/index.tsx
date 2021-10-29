import React, {useContext} from "react";
import {RouteComponentProps, Redirect} from "@reach/router";
import {Stack, Text, Flex} from "@chakra-ui/layout";
import {Stat, StatHelpText, StatLabel, StatNumber, useColorModeValue} from "@chakra-ui/react";

import {ExpensesContext, PeopleContext} from "../../contexts";

const BalancePage = (_: RouteComponentProps) => {
  const {people, getPersonById} = useContext(PeopleContext);
  const {expenses} = useContext(ExpensesContext);
  const border = useColorModeValue("primary.500", "gray.400");
  const bg = useColorModeValue("transparent", "gray.800");

  if (people.length < 2) return <Redirect noThrow to="/people" />;

  return (
    <>
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
                {Math.abs(person.personal_balance).toLocaleString()}
              </Text>
            </Flex>
          ))}
      </Stack>
      <Stack bottom={2} direction="row" overflowX="auto" position="absolute" px={2} w="100vw">
        {expenses.map((expense) => (
          <Stat
            key={expense.id}
            bg={bg}
            border="solid 1px"
            borderColor={border}
            direction="column"
            flex={1}
            minW="fit-content"
            px={2}
            py={0.5}
            rounded="md"
          >
            <StatLabel>{expense.description}</StatLabel>
            <StatNumber>${expense.cost.toLocaleString()}</StatNumber>
            <StatHelpText>Paid by: {getPersonById(expense.paid_by)?.name}</StatHelpText>
          </Stat>
        ))}
      </Stack>
    </>
  );
};

export default BalancePage;
