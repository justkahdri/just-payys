import React from "react";
import {StackProps, Stack, Select, Input} from "@chakra-ui/react";

interface Props extends StackProps {
  currencyChange: (value: string) => void;
  currency: string;
  cost?: string;
  costChange: (value: string) => void;
}

const CostInput = ({cost, currency, costChange, currencyChange, ...rest}: Props) => (
  <Stack align="center" direction="row" id="cost-row" {...rest}>
    <Select
      flex={1}
      id="currency"
      maxW="70px"
      value={currency}
      variant="unstyled"
      onChange={({currentTarget: {value}}) => currencyChange(value)}
    >
      <option value="ars">ARS</option>
      <option value="usd">U$D</option>
      <option value="eur">EUR</option>
    </Select>
    <Input
      flex={2}
      id="cost"
      placeholder="0.00"
      type="number"
      value={cost}
      onChange={({currentTarget: {value}}) => costChange(value)}
    />
  </Stack>
);

export default CostInput;
