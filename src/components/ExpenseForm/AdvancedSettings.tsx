import React from "react";
import {
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
  notes: string;
  notesChange: (value: string) => void;
}

const AdvancedSettings = ({notes, notesChange}: Props) => (
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
