import React from "react";
import {StackProps, Stack, IconButton, Input} from "@chakra-ui/react";
import {IoReceiptOutline} from "react-icons/io5";

interface Props extends StackProps {
  description: string;
  descriptionChange: (value: string) => void;
}

const DescriptionInput = ({description, descriptionChange, ...rest}: Props) => (
  <Stack direction="row" id="description-row" {...rest}>
    <IconButton aria-label="Select category" colorScheme="primary" icon={<IoReceiptOutline />} />
    <Input
      id="description"
      placeholder="Description"
      value={description}
      onChange={({currentTarget: {value}}) => descriptionChange(value)}
    />
  </Stack>
);

export default DescriptionInput;
