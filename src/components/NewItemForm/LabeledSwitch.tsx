import React from "react";
import {
  FormControl,
  FormLabel,
  Switch,
  Popover,
  PopoverTrigger,
  PopoverContent,
  IconButton,
} from "@chakra-ui/react";
import {BsInfoCircle} from "react-icons/bs";

interface Props {
  label: string;
  children: string;
}

const LabeledSwitch = ({label, children: description}: Props) => (
  <FormControl alignItems="center" display="flex">
    <FormLabel fontSize="sm" htmlFor={label} mb="0">
      {label}
    </FormLabel>
    <Switch colorScheme="purple" id={label} pr={3} />
    <Popover isLazy>
      <PopoverTrigger>
        <IconButton aria-label="What is this?" icon={<BsInfoCircle />} variant="unstyled" />
      </PopoverTrigger>
      <PopoverContent bg="gray.600" maxW="60vw" p={2}>
        {description}
      </PopoverContent>
    </Popover>
  </FormControl>
);

export {LabeledSwitch};
