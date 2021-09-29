import React, {ReactElement, FC, MouseEventHandler, MouseEvent} from "react";
import {Stack, Button, useDisclosure, Collapse, Text, useToast, Icon} from "@chakra-ui/react";
import {IconType} from "react-icons";
import {BiErrorAlt} from "react-icons/bi";

export {LabeledSwitch} from "./LabeledSwitch";

interface Props {
  doneMessage: string;
  openMessage: string;
  btnIcon: ReactElement<IconType>;
  onSubmit: (event: MouseEvent<HTMLButtonElement>) => Promise<void>;
}

const NewItemForm: FC<Props> = ({btnIcon, children, openMessage, onSubmit, doneMessage}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const toast = useToast();

  const handleClick: MouseEventHandler<HTMLButtonElement> = async (event) => {
    try {
      await onSubmit(event);
      onClose();
    } catch ({message}) {
      toast({
        render: () => (
          <Stack
            align="center"
            bg="gray.700"
            border="2px solid"
            borderColor="red.400"
            color="white"
            direction="row"
            p={2}
            rounded="md"
          >
            <Icon as={BiErrorAlt} boxSize={5} color="red.400" />
            <Text fontWeight={500}>{message as string}</Text>
          </Stack>
        ),
      });
    }
  };

  return (
    <>
      <Collapse in={!isOpen}>
        <Button
          isFullWidth
          colorScheme="purple"
          leftIcon={btnIcon}
          variant="outline"
          onClick={onOpen}
        >
          {openMessage}
        </Button>
      </Collapse>
      <Collapse animateOpacity in={isOpen}>
        <Stack bg="gray.700" mb="50px" p={3} rounded="md" shadow="md">
          {children}
          <Stack direction="row" justify={["center", "end"]}>
            <Button
              colorScheme="red"
              flex={1}
              maxW="120px"
              size="sm"
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button flex={1} maxW="150px" size="sm" onClick={handleClick}>
              {doneMessage}
            </Button>
          </Stack>
        </Stack>
      </Collapse>
    </>
  );
};

export default NewItemForm;
