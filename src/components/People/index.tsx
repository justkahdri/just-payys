import React, {useState} from "react";
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

import {parseError} from "../../utils";

const PeoplePage = (props: RouteComponentProps) => {
  const [namesInput, setNamesInput] = useState("");
  const [people, setPeople] = useState<string[]>([]);
  const toast = useToast();

  const addNewPerson = () => {
    if (namesInput) {
      setPeople((people) => [...people, namesInput]);
      setNamesInput("");
    } else {
      toast(parseError("A name is required", "Please write a name before adding a new person."));
    }
  };

  const deletePerson = (person: string) => {
    setPeople((names) => names.filter((n) => n !== person));
  };

  return (
    <Flex direction="column" justify="space-between" minH="60vh">
      <Stack spacing={5}>
        <FormControl id="email">
          <FormLabel>Names:</FormLabel>
          <InputGroup size="md">
            <Input
              id="names"
              placeholder="Robias Tumiz"
              value={namesInput}
              onChange={({currentTarget: {value}}) => setNamesInput(value)}
              onKeyUp={(e) => e.key == "Enter" && addNewPerson()}
            />
            <InputRightElement>
              <Icon as={BsPlusSquare} color="secondary.200" onClick={addNewPerson} />
            </InputRightElement>
          </InputGroup>

          {!people.length && (
            <FormHelperText>
              You can use <i>&quot;Enter&quot;</i> to add the new name too.
            </FormHelperText>
          )}
        </FormControl>

        <Wrap justify="center" spacing="2vw">
          {people.map((person, i) => (
            <WrapItem key={person}>
              <Badge
                alignItems="center"
                colorScheme={i % 2 ? "primary" : "secondary"}
                display="flex"
                variant="outline"
              >
                {person} <CloseButton size="sm" onClick={() => deletePerson(person)} />
              </Badge>
            </WrapItem>
          ))}
        </Wrap>
      </Stack>

      <Button
        alignSelf="flex-end"
        as={Link}
        isDisabled={!people.length}
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
