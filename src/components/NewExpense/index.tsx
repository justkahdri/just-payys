import React, {RefObject, useRef, useContext, useState} from "react";
import {Button, Select, Input, Stack, Text, useToast} from "@chakra-ui/react";
import {Link, RouteComponentProps, Redirect, useNavigate} from "@reach/router";

import {parseError} from "../../utils";
import {PeopleContext} from "../../contexts/PeopleProvider";

import DescriptionInput from "./DescriptionInput";

const NewExpensePage = (_: RouteComponentProps) => {
  const {people, divideEqual} = useContext(PeopleContext);
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState("");
  const payerSelect = useRef(null) as RefObject<HTMLSelectElement>;
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = () => {
    let options;

    if (payerSelect.current?.value) {
      if (Number(cost) > 0) {
        divideEqual(
          Number(cost),
          payerSelect.current.value,
          people.map((p) => p.id), // TODO: Should load from selected people
        );
        navigate("/", {state: {newExpense: true}});
      } else options = parseError("Please enter a valid cost", "Cost must be greater than zero");
    } else
      options = parseError("An error occurred submitting", "Who pays the expense is not defined.");
    options && toast(options);
  };

  if (people.length < 2) return <Redirect noThrow to="/people" />;

  return (
    <Stack px={4} spacing="50px">
      <Stack spacing={3}>
        <DescriptionInput description={description} descriptionChange={setDescription} />
        <Stack align="center" direction="row" id="cost-row">
          <Input
            flex={2}
            id="cost"
            placeholder="0.00"
            type="number"
            value={cost}
            onChange={({currentTarget: {value}}) => setCost(value)}
          />
        </Stack>

        <Stack align="center" direction="row" justify="center" wrap="wrap">
          <Text>Paid by</Text>
          <Select ref={payerSelect} id="paid_by" size="sm" width="fit-content">
            {people.map((person) => (
              <option key={person.id} value={person.id}>
                {person.name}
              </option>
            ))}
          </Select>
          <Text id="division">
            {" and equally divided "}
            <Button colorScheme="secondary" variant="link">
              among all.
            </Button>
          </Text>
        </Stack>
      </Stack>
      <Stack direction="row" justify="end">
        <Button as={Link} colorScheme="secondary" to="/" variant="outline" w="80px">
          Cancel
        </Button>
        <Button isDisabled={!description || !cost} w="100px" onClick={handleSubmit}>
          Save
        </Button>
      </Stack>
    </Stack>
  );
};

export default NewExpensePage;
