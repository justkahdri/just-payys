import React from "react";
import {Stack, Button} from "@chakra-ui/react";
import {Link, Redirect, RouteComponentProps} from "@reach/router";

const ControlPanel = (props: RouteComponentProps) => {
  if (false) return <Redirect to="/people" />;

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
