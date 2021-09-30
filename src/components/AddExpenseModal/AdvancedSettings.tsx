import React from "react";
import {
  Input,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Icon,
  Textarea,
  Text,
  Stack,
} from "@chakra-ui/react";
import {GoSettings} from "react-icons/go";

interface Props {
  dateValue: string;
  notes: string;
  dateValueChange: (value: string) => void;
  notesChange: (value: string) => void;
}

const AdvancedSettings = ({notes, dateValue, notesChange, dateValueChange}: Props) => (
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
            value={dateValue}
            onChange={({currentTarget: {value}}) => dateValueChange(value)}
          />
          <Textarea
            placeholder="Notes"
            resize="vertical"
            size="sm"
            value={notes}
            onChange={({currentTarget: {value}}) => notesChange(value)}
          />
        </Stack>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
);

export default AdvancedSettings;
