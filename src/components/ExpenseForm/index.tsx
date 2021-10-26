import React, {RefObject, useRef, useState} from "react";
import {Button, Select, Stack, Text, useToast} from "@chakra-ui/react";
import {RouteComponentProps, Link} from "@reach/router";

import {parseError} from "../../utils";

import CostInput from "./CostInput";
import DescriptionInput from "./DescriptionInput";
import AdvancedSettings from "./AdvancedSettings";

const ExpenseForm = (props: RouteComponentProps) => {
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState("");
  const [currency, setCurrency] = useState("ars");
  const [notes, setNotes] = useState("");
  const payerSelect = useRef(null) as RefObject<HTMLSelectElement>;
  const toast = useToast();

  const handleSubmit = () => {
    let options;

    if (payerSelect.current) {
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
        <DescriptionInput description={description} descriptionChange={setDescription} />
        <CostInput
          cost={cost}
          costChange={setCost}
          currency={currency}
          currencyChange={setCurrency}
        />

        <Stack align="center" direction="row" justify="center" wrap="wrap">
          <Text>Payed by</Text>
          <Select ref={payerSelect} id="payed_by" size="sm" width="fit-content">
            {["example"].map((person) => (
              <option key={person} value={person}>
                {person}
              </option>
            ))}
          </Select>
          <Text id="division">and equally divided.</Text>
        </Stack>

        <AdvancedSettings notes={notes} notesChange={setNotes} />
      </Stack>
      <Button isDisabled={!description || !cost} w="100px" onClick={handleSubmit}>
        Save
      </Button>
    </Stack>
  );
};

export default ExpenseForm;
