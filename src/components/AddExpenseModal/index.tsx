import React, {ChangeEventHandler, useState} from "react";
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
  IconButton,
  Stack,
  Text,
  Input,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Icon,
  Textarea,
} from "@chakra-ui/react";
import {IoReceiptOutline} from "react-icons/io5";
import {GoSettings} from "react-icons/go";

import {getCurrentDate} from "@utils";

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
          <ModalBody>
            <AddExpenseForm />
          </ModalBody>
          <ModalFooter>
            <Stack direction="row">
              <Button colorScheme="red" variant="outline" onClick={onClose}>
                Close
              </Button>
              <Button w="100px" onClick={onClose}>
                Save
              </Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const AddExpenseForm = () => {
  const [groupInput, setGroupInput] = useState("");
  const [expenseDate, setExpenseDate] = useState(getCurrentDate());

  const addPerson = (person: string) => {
    console.log(person);
  };

  return (
    <Stack spacing={3}>
      <Input
        id="group"
        placeholder="Group's name"
        value={groupInput}
        onChange={({currentTarget: {value}}) => setGroupInput(value)}
        onKeyUp={(e) => {
          e.key == "Enter" && addPerson(groupInput);
        }}
      />
      <Stack direction="row" id="description-row">
        <IconButton aria-label="Select category" colorScheme="purple" icon={<IoReceiptOutline />} />
        <Input id="description" placeholder="Description" />
      </Stack>
      <Stack align="center" direction="row" id="cost-row">
        <Select defaultValue="ars" flex={1} id="currency" maxW="70px" variant="unstyled">
          <option value="ars">ARS</option>
          <option value="usd">U$D</option>
          <option value="eur">EUR</option>
        </Select>
        <Input flex={2} id="cost" placeholder="0.00" type="number" />
      </Stack>

      <Stack align="center" direction="row" justify="center" wrap="wrap">
        <Text>Payed by</Text>
        <Select id="buyer" size="sm" width="fit-content">
          <option value="self">Kahdri</option>
          <option value="option2">John Doe</option>
          <option value="option3">Goncy</option>
        </Select>
        <Text id="division">and equally divided.</Text>
      </Stack>

      <Accordion allowToggle border="0 transparent">
        <AccordionItem>
          <AccordionButton _expanded={{bg: "purple.200", color: "blackAlpha.800"}}>
            <Text as="h3" flex="1" fontWeight={500} textAlign="left">
              Advanced Settings
            </Text>
            <Icon as={GoSettings} />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Stack>
              <Input
                type="date"
                value={expenseDate}
                onChange={({currentTarget: {value}}) => setExpenseDate(value)}
              />
              <Textarea placeholder="Notes" resize="vertical" size="sm" />
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  );
};

export default AddExpenseModal;
