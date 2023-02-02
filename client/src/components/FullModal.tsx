import {
  Modal,
  ModalContent,
  ModalHeader,
  Button,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Flex,
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  header: string;
  children?: React.ReactNode;
};

function FullModal({ isOpen, onClose, header, children }: Props) {
  return (
    <Modal onClose={onClose} size="full" isOpen={isOpen} motionPreset="scale">
      <ModalContent bg="primary.900">
        <Flex flexDir="column" align="center">
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </Flex>
      </ModalContent>
    </Modal>
  );
}

export default FullModal;
