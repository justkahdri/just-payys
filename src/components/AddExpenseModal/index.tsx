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

const AddExpenseModal = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const getInitialDate = () => {
    let now = new Date();
    const offset = now.getTimezoneOffset();

    now = new Date(now.getTime() - offset * 60 * 1000);

    return now.toISOString().substring(0, 10);
  };

  const [groupValue, setGroupValue] = useState("");
  const [expenseDate, setExpenseDate] = useState(getInitialDate());
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setGroupValue(event.target.value);

  const addPerson = (person: string) => {
    console.log(person);
  };

  return (
    <>
      <Button
        bottom={3}
        colorScheme="purple"
        leftIcon={<IoReceiptOutline />}
        position="absolute"
        right={5}
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
            <Stack spacing={3}>
              <Input
                id="group"
                placeholder="Group's name"
                value={groupValue}
                onChange={handleChange}
                onKeyUp={(e) => {
                  e.key == "Enter" && addPerson(groupValue);
                }}
              />
              <Stack direction="row" id="description-row">
                <IconButton
                  aria-label="Select category"
                  colorScheme="purple"
                  icon={<IoReceiptOutline />}
                />
                <Input id="description" placeholder="Description" />
              </Stack>
              <Stack align="center" direction="row" id="cost-row">
                <Select defaultValue="ars" flex={1} id="currency" maxW="70px" variant="unstyled">
                  <option value="ars">ARS</option>
                  <option value="dollar">$</option>
                  <option value="euro">EUR</option>
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

export default AddExpenseModal;
