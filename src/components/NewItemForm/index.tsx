import React, {ReactElement, FC, MouseEventHandler, MouseEvent} from "react";
import {Stack, Button, useDisclosure, Collapse, useToast} from "@chakra-ui/react";
import {IconType} from "react-icons";

export {LabeledSwitch} from "./LabeledSwitch";
import {parseError} from "@utils";

interface Props {
  doneMessage: string;
  openMessage: string;
  btnIcon: ReactElement<IconType>;
  onSubmit: (event: MouseEvent<HTMLButtonElement>) => Promise<void>;
  isDisabled?: boolean;
}

const NewItemForm: FC<Props> = (props) => {
  const {btnIcon, children, openMessage, onSubmit, doneMessage, isDisabled = false} = props;
  const {isOpen, onOpen, onClose} = useDisclosure();
  const toast = useToast();

  const handleClick: MouseEventHandler<HTMLButtonElement> = async (event) => {
    try {
      await onSubmit(event);
      onClose();
    } catch ({name, message}) {
      const options = parseError(name as string, message as string);

      toast(options);
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
            <Button flex={1} isDisabled={isDisabled} maxW="150px" size="sm" onClick={handleClick}>
              {doneMessage}
            </Button>
          </Stack>
        </Stack>
      </Collapse>
    </>
  );
};

export default NewItemForm;
