import React, {useState, useContext} from "react";
import {
  Input,
  FormControl,
  Stack,
  FormHelperText,
  Badge,
  FormLabel,
  useToast,
  Wrap,
  WrapItem,
  CloseButton,
  InputGroup,
  InputRightElement,
  Icon,
  Button,
  Flex,
} from "@chakra-ui/react";
import {BsPlusSquare, BsCheck} from "react-icons/bs";
import {RouteComponentProps, Link} from "@reach/router";

import {PeopleContext} from "../../contexts";
import {parseError} from "../../utils";

const PeoplePage = (_: RouteComponentProps) => {
  const [namesInput, setNamesInput] = useState("");
  const {people, addPerson, removePerson} = useContext(PeopleContext);

  const usedNames = people.map((p) => p.name.toLowerCase());
  const toast = useToast();

  const handleAddPerson = () => {
    if (namesInput && usedNames.includes(namesInput.toLowerCase())) {
      toast(parseError("Name already in use", "Please write a different name."));
    } else if (namesInput) {
      addPerson(namesInput);
      setNamesInput("");
    } else {
      toast(parseError("A name is required", "Please write a name before adding a new person."));
    }
  };

  return (
    <Flex direction="column" justify="space-between" minH="60vh" px={5}>
      <Stack pb={5} spacing={5}>
        <FormControl id="email">
          <FormLabel>Names:</FormLabel>
          <InputGroup size="md">
            <Input
              id="names"
              placeholder="Robias Tumiz"
              value={namesInput}
              onChange={({currentTarget: {value}}) => setNamesInput(value)}
              onKeyUp={(e) => e.key == "Enter" && handleAddPerson()}
            />
            <InputRightElement>
              <Icon as={BsPlusSquare} color="secondary.200" onClick={handleAddPerson} />
            </InputRightElement>
          </InputGroup>

          <FormHelperText minH="20px">
            {people.length < 2 && (
              <>
                You can use <i>&quot;Enter&quot;</i> to add a new name too.
              </>
            )}
          </FormHelperText>
        </FormControl>

        <Wrap justify="center" spacing="2vw">
          {people.map((person, i) => (
            <WrapItem key={person.id}>
              <Badge
                alignItems="center"
                colorScheme={i % 2 ? "primary" : "secondary"}
                display="flex"
                variant="outline"
              >
                {person.name} <CloseButton size="sm" onClick={() => removePerson(person.id)} />
              </Badge>
            </WrapItem>
          ))}
        </Wrap>
      </Stack>

      <Button
        alignSelf="flex-end"
        as={Link}
        isDisabled={people.length < 2}
        rightIcon={<Icon as={BsCheck} boxSize={5} />}
        to="/"
        variant="outline"
      >
        Done
      </Button>
    </Flex>
  );
};

export default PeoplePage;
