import React, {useContext, useEffect} from "react";
import {Stack, Button, useToast} from "@chakra-ui/react";
import {Link, Redirect, RouteComponentProps} from "@reach/router";

import {PeopleContext} from "../contexts";

type ControlPanelProps = RouteComponentProps<{
  location: {state?: {newExpense?: boolean}};
}>;

const ControlPanel = ({location}: ControlPanelProps) => {
  const {people} = useContext(PeopleContext);
  const toast = useToast();

  useEffect(() => {
    location?.state?.newExpense &&
      toast({
        title: "Expense added!",
        status: "success",
        isClosable: true,
      });
  }, [location, toast]);

  if (people.length < 2) return <Redirect noThrow to="/people" />;

  return (
    <Stack justify="center" mt="15vh" px={6} spacing={6}>
      <Button as={Link} colorScheme="secondary" size="lg" to="/new-expense" variant="outline">
        New Expense
      </Button>
      <Button as={Link} size="lg" to="/balance">
        View Balance
      </Button>
      <Button as={Link} colorScheme="secondary" size="lg" to="/people" variant="outline">
        Edit members
      </Button>
    </Stack>
  );
};

export default ControlPanel;
