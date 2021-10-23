import React, {RefObject, useRef, useState} from "react";
import {Input, Button, Select, Stack, Text, useToast} from "@chakra-ui/react";

import {parseError} from "../../utils";

import CostInput from "./CostInput";
import DescriptionInput from "./DescriptionInput";
import AdvancedSettings from "./AdvancedSettings";

const ExpenseForm = () => {
  const [namesInput, setNamesInput] = useState("");
  const [people, setPeople] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState("");
  const [currency, setCurrency] = useState("ars");
  const [notes, setNotes] = useState("");
  const payerSelect = useRef(null) as RefObject<HTMLSelectElement>;
  const toast = useToast();

  const addNewPerson = () => {
    if (namesInput) {
      setPeople((people) => [...people, namesInput]);
      setNamesInput("");
    } else {
      toast(parseError("A name is required", "Please write a name before adding a new person."));
    }
  };

  const handleSubmit = () => {
    let options;

    if (namesInput && payerSelect.current) {
      if (cost && Number(cost) > 0) {
        alert("Submit success");
      } else options = parseError("Please enter a valid cost", "Cost must be greater than zero");
    } else
      options = parseError("An error occurred submitting", "Who pays the expense is not defined.");
    options && toast(options);
  };

  return (
    <Stack>
      <Stack spacing={3}>
        <Input
          id="names"
          placeholder="Write a name"
          value={namesInput}
          onChange={({currentTarget: {value}}) => setNamesInput(value)}
          onKeyUp={(e) => e.key == "Enter" && addNewPerson()}
        />
        <DescriptionInput description={description} descriptionChange={setDescription} />
        <CostInput
          cost={cost}
          costChange={setCost}
          currency={currency}
          currencyChange={setCurrency}
        />

        {people.length && (
          <Stack align="center" direction="row" justify="center" wrap="wrap">
            <Text>Payed by</Text>
            <Select ref={payerSelect} id="payed_by" size="sm" width="fit-content">
              {people.map((person) => (
                <option key={person} value={person}>
                  {person}
                </option>
              ))}
            </Select>
            <Text id="division">and equally divided.</Text>
          </Stack>
        )}

        <AdvancedSettings notes={notes} notesChange={setNotes} />
      </Stack>
      <Button isDisabled={!people.length || !description || !cost} w="100px" onClick={handleSubmit}>
        Save
      </Button>
    </Stack>
  );
};

export default ExpenseForm;
