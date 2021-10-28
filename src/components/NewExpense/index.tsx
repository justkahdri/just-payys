import React, {RefObject, useRef, useContext, useState} from "react";
import {
  Button,
  Select,
  Input,
  Stack,
  Text,
  useToast,
  CheckboxGroup,
  Wrap,
  Checkbox,
  Collapse,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import {Link, RouteComponentProps, Redirect, useNavigate} from "@reach/router";

import {parseError, compareArrays} from "../../utils";
import {PeopleContext, ExpensesContext} from "../../contexts";

import DescriptionInput from "./DescriptionInput";

const NewExpensePage = (_: RouteComponentProps) => {
  const {isOpen, onToggle} = useDisclosure();
  const toast = useToast();
  const navigate = useNavigate();

  const {people, divideEqual, getPersonById} = useContext(PeopleContext);
  const {addExpense} = useContext(ExpensesContext);
  const allIDs = people.map((p) => p.id);

  const [description, setDescription] = useState("");
  const [cost, setCost] = useState("");
  const [consumersGroup, setConsumersGroup] = useState(allIDs);

  const payerSelect = useRef(null) as RefObject<HTMLSelectElement>;

  const handleSubmit = () => {
    let options;

    if (payerSelect.current?.value) {
      if (Number(cost) > 0) {
        divideEqual(Number(cost), payerSelect.current.value, consumersGroup); // Adds to People Context
        addExpense({cost: Number(cost), description, paid_by: payerSelect.current.value}); // Adds to Expenses Context
        navigate("/", {state: {newExpense: true}});
      } else options = parseError("Please enter a valid cost", "Cost must be greater than zero");
    } else
      options = parseError("An error occurred submitting", "Who pays the expense is not defined.");
    options && toast(options);
  };

  if (people.length < 2) return <Redirect noThrow to="/people" />;

  return (
    <Stack px={5} spacing={4}>
      <Stack spacing={3}>
        <DescriptionInput description={description} descriptionChange={setDescription} />
        <Box align="center" direction="row" id="cost-row">
          <Input
            flex={2}
            id="cost"
            placeholder="0.00"
            type="number"
            value={cost}
            onChange={({currentTarget: {value}}) => setCost(value)}
          />
        </Box>

        <Stack align="center" direction="row" justify="center" textAlign="center" wrap="wrap">
          <Text>Paid by</Text>
          <Select ref={payerSelect} id="paid_by" size="sm" width="fit-content">
            {people.map((person) => (
              <option key={person.id} value={person.id}>
                {person.name}
              </option>
            ))}
          </Select>
          <Text id="division" minH="48px">
            {" and equally divided "}
            <Button colorScheme="secondary" variant="link" whiteSpace="pre-wrap" onClick={onToggle}>
              {compareArrays(consumersGroup, allIDs)
                ? "among all."
                : `between ${getPersonById(consumersGroup[0])?.name} and ${
                    consumersGroup.length - 1
                  } more`}
            </Button>
          </Text>
        </Stack>

        <Stack align="center" direction="row" justify="center" wrap="wrap">
          <Collapse animateOpacity in={isOpen}>
            <CheckboxGroup
              colorScheme="green"
              value={consumersGroup}
              onChange={(value) => setConsumersGroup(value as string[])}
            >
              <Wrap pb={2}>
                {people.map((person) => (
                  <Checkbox
                    key={person.id}
                    isDisabled={consumersGroup.length == 2 && consumersGroup.includes(person.id)}
                    value={person.id}
                  >
                    {person.name}
                  </Checkbox>
                ))}
              </Wrap>
            </CheckboxGroup>
          </Collapse>
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
