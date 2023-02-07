import { Tag, TagLabel, TagCloseButton, useDisclosure } from "@chakra-ui/react";
import DeletePopOver from "../../../components/DeletePopOver";

type Props = {
  key: number;
  label: string;
  colorScheme: string;
  onDelete: () => void;
};

function Chips({ key, label, onDelete, colorScheme }: Props) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Tag
      size={"lg"}
      key={key}
      borderRadius="full"
      variant="solid"
      colorScheme={colorScheme}
    >
      <TagLabel>{label}</TagLabel>
      <DeletePopOver isOpen={isOpen} onClose={onClose} onConfirm={onDelete}>
        <TagCloseButton onClick={onOpen} />
      </DeletePopOver>
    </Tag>
  );
}

export default Chips;
