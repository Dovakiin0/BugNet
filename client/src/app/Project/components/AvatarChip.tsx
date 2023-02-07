import {
  Tag,
  Avatar,
  TagLabel,
  TagCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import DeletePopOver from "../../../components/DeletePopOver";

type Props = {
  src: string;
  label: string;
  onDelete: () => void;
};

export default function AvatarChip({ src, label, onDelete }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Tag size="lg" bg="brand.500" color="primary.100" borderRadius="full">
      <Avatar src={src} size="xs" name={label} ml={-1} mr={2} />
      <TagLabel>{label}</TagLabel>
      <DeletePopOver isOpen={isOpen} onClose={onClose} onConfirm={onDelete}>
        <TagCloseButton onClick={onOpen} />
      </DeletePopOver>
    </Tag>
  );
}
