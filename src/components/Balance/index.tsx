import React, {useContext} from "react";
import {RouteComponentProps, Redirect} from "@reach/router";
import {Stack, Text, Flex} from "@chakra-ui/layout";

import {ExpensesContext, PeopleContext} from "../../contexts";

const BalancePage = (_: RouteComponentProps) => {
  const {people, getPersonById} = useContext(PeopleContext);
  const {expenses} = useContext(ExpensesContext);

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
      <Stack bottom={2} direction="row" maxW="100vw" overflowX="auto" position="absolute" px={2}>
        {expenses.map((expense) => (
          <Flex
            key={expense.id}
            border="solid 1px"
            borderColor="primary.400"
            direction="column"
            px={4}
            py={1}
            rounded="md"
          >
            <Text as="h5" fontWeight={500}>
              {expense.description.toUpperCase()}
            </Text>
            <Text fontSize="sm">
              Paid by:
              <Text as="span" color="secondary.300">
                {` ${getPersonById(expense.paid_by)?.name}`}
              </Text>
            </Text>
            <Text fontSize="sm">
              Price:
              <Text as="span" color="red.400">
                {` $${expense.cost}`}
              </Text>
            </Text>
          </Flex>
        ))}
      </Stack>
    </>
  );
};

export default BalancePage;
