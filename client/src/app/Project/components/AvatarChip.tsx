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
  status?: string;
  props?: any;
  isOwner?: boolean;
};

export default function AvatarChip({
  src,
  label,
  onDelete,
  props,
  status,
  isOwner = true,
}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const color = {
    Accepted: "brand.500",
    Pending: "primary.500",
    Rejected: "red.500",
  };

  return (
    <Tag
      size="lg"
      bg={color[status as keyof typeof color]}
      color="primary.100"
      borderRadius="full"
      {...props}
    >
      <Avatar src={src} size="xs" name={label} ml={-1} mr={2} />
      <TagLabel fontSize={"sm"}>{label}</TagLabel>
      {isOwner && (
        <DeletePopOver isOpen={isOpen} onClose={onClose} onConfirm={onDelete}>
          <TagCloseButton onClick={onOpen} />
        </DeletePopOver>
      )}
    </Tag>
  );
}
