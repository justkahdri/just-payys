import React, {useContext} from "react";
import {Stack, Button} from "@chakra-ui/react";
import {Link, Redirect, RouteComponentProps} from "@reach/router";

import {PeopleContext} from "../contexts/PeopleProvider";

const ControlPanel = (_: RouteComponentProps) => {
  const {people} = useContext(PeopleContext);

  if (people.length < 2) return <Redirect noThrow to="/people" />;

  return (
    <Stack justify="center" mt="15vh" spacing={6}>
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
