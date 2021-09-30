import React, {RefObject, useContext, useEffect, useRef, useState} from "react";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Select,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import {IoReceiptOutline} from "react-icons/io5";

import CostInput from "./CostInput";
import DescriptionInput from "./DescriptionInput";
import AdvancedSettings from "./AdvancedSettings";

import {GroupsContext, PeopleContext, ExpensesContext} from "@contexts";
import {getCurrentDate, parseError} from "@utils";

const AddExpenseModal = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <Button
        bottom="60px"
        colorScheme="purple"
        leftIcon={<IoReceiptOutline />}
        position="fixed"
        right={3}
        onClick={onOpen}
      >
        Add expense
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new Expense</ModalHeader>
          <ModalCloseButton />
          <AddExpenseForm handleClose={onClose} />
        </ModalContent>
      </Modal>
    </>
  );
};

const AddExpenseForm = ({handleClose}: {handleClose: VoidFunction}) => {
  const {people} = useContext(PeopleContext);
  const {addExpense} = useContext(ExpensesContext);
  const {groups, getGroupById} = useContext(GroupsContext);

  const [selectedGroup, setSelectedGroup] = useState<GroupT>();
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState("");
  const [currency, setCurrency] = useState("ars");
  const [filteredPeople, setFilteredPeople] = useState<PersonT[]>([]);
  const [expenseDate, setExpenseDate] = useState(getCurrentDate());
  const [notes, setNotes] = useState("");
  const payerSelect = useRef(null) as RefObject<HTMLSelectElement>;
  const toast = useToast();

  useEffect(() => {
    if (selectedGroup) {
      setFilteredPeople(people.filter((p) => selectedGroup.members.includes(p.id)));
    } else {
      setFilteredPeople([]);
    }
  }, [selectedGroup, people]);

  const handleSubmit = () => {
    let options;

    if (selectedGroup && payerSelect.current) {
      if (cost && Number(cost) > 0) {
        addExpense({
          group_id: selectedGroup.id,
          description,
          payed_by: payerSelect.current.value,
          participants: filteredPeople.map((p) => p.id),
          cost: Number(cost),
          expense_date: expenseDate,
          divided: "equal",
          notes,
        });
        handleClose();
      } else options = parseError("Please enter a valid cost", "Cost must be greater than zero");
    } else
      options = parseError("An error occurred submitting", "Who pays the expense is not defined.");
    options && toast(options);
  };

  return (
    <>
      <ModalBody>
        <Stack spacing={3}>
          <Select
            id="group"
            placeholder="Select a group"
            onChange={({currentTarget: {value}}) => setSelectedGroup(getGroupById(value))}
          >
            {groups.map((group) => (
              <option key={group.id} value={group.id}>
                {group.name}
              </option>
            ))}
          </Select>
          <DescriptionInput description={description} descriptionChange={setDescription} />
          <CostInput
            cost={cost}
            costChange={setCost}
            currency={currency}
            currencyChange={setCurrency}
          />

          {filteredPeople.length && (
            <Stack align="center" direction="row" justify="center" wrap="wrap">
              <Text>Payed by</Text>
              <Select ref={payerSelect} id="payed_by" size="sm" width="fit-content">
                {filteredPeople.map((person) => (
                  <option key={person.id} value={person.id}>
                    {person.name}
                  </option>
                ))}
              </Select>
              <Text id="division">and equally divided.</Text>
            </Stack>
          )}

          <AdvancedSettings
            dateValue={expenseDate}
            dateValueChange={setExpenseDate}
            notes={notes}
            notesChange={setNotes}
          />
        </Stack>
      </ModalBody>
      <ModalFooter>
        <Stack direction="row">
          <Button colorScheme="red" variant="outline" onClick={handleClose}>
            Close
          </Button>
          <Button
            isDisabled={!selectedGroup || !description || !cost}
            w="100px"
            onClick={handleSubmit}
          >
            Save
          </Button>
        </Stack>
      </ModalFooter>
    </>
  );
};

export default AddExpenseModal;
