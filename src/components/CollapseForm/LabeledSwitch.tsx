import React from "react";
import {
  FormControl,
  FormLabel,
  Switch,
  SwitchProps,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Icon,
} from "@chakra-ui/react";
import {BsInfoCircle} from "react-icons/bs";

interface Props extends SwitchProps {
  label: string;
  children: string;
}

const LabeledSwitch = ({label, children: description, ...rest}: Props) => (
  <FormControl alignItems="center" display="flex">
    <FormLabel fontSize="sm" htmlFor={label} mb="0">
      {label}
    </FormLabel>
    <Switch colorScheme="purple" id={label} pr={3} {...rest} />
    <Popover isLazy>
      <PopoverTrigger>
        <Icon aria-label="What is this?" as={BsInfoCircle} cursor="pointer" />
      </PopoverTrigger>
      <PopoverContent bg="gray.600" maxW="60vw" p={2}>
        {description}
      </PopoverContent>
    </Popover>
  </FormControl>
);

export {LabeledSwitch};
