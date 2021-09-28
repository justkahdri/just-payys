import React, {ReactElement, FC, MouseEventHandler} from "react";
import {Stack, Button, useDisclosure, Collapse} from "@chakra-ui/react";
import {IconType} from "react-icons";

export {LabeledSwitch} from "./LabeledSwitch";

interface Props {
  doneMessage: string;
  openMessage: string;
  btnIcon: ReactElement<IconType>;
  handleSubmit: MouseEventHandler<HTMLButtonElement>;
}

const NewItemForm: FC<Props> = ({btnIcon, children, openMessage, handleSubmit, doneMessage}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    onClose();
    handleSubmit(event);
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
        <Stack bg="gray.700" p={3} rounded="md" shadow="md">
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
