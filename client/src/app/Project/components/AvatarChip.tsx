import { Tag, Avatar, TagLabel } from "@chakra-ui/react";

type Props = {
  src: string;
  label: string;
};

export default function AvatarChip({ src, label }: Props) {
  return (
    <Tag size="lg" bg="brand.500" color="primary.100" borderRadius="full">
      <Avatar src={src} size="xs" name={label} ml={-1} mr={2} />
      <TagLabel>{label}</TagLabel>
    </Tag>
  );
}
