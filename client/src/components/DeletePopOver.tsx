import {
  Popover,
  PopoverTrigger,
  TagCloseButton,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Flex,
  Button,
  Text,
} from "@chakra-ui/react";
import React from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children: React.ReactNode;
};

export default function DeletePopOver({
  isOpen,
  onClose,
  onConfirm,
  children,
}: Props) {
  return (
    <Popover isOpen={isOpen} onClose={onClose} placement="bottom">
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent bg="primary.900" border="none">
        <PopoverArrow />
        <PopoverBody as={Flex} flexDir="column" gap="3">
          {/* confirm Delete */}
          <Text>Confirm Delete</Text>
          <Text color="primary.200" fontSize={"sm"}>
            Are you sure you want to delete?
          </Text>
          <Button bg="red.500" _hover={{ bg: "red.600" }} onClick={onConfirm}>
            Delete
          </Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
