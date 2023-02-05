import { Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";

type Props = {
  key: number;
  label: string;
  colorScheme: string;
  onClick: () => void;
};

function Chips({ key, label, onClick, colorScheme }: Props) {
  return (
    <Tag
      size={"lg"}
      key={key}
      borderRadius="full"
      variant="solid"
      colorScheme={colorScheme}
    >
      <TagLabel>{label}</TagLabel>
      <TagCloseButton onClick={onClick} />
    </Tag>
  );
}

export default Chips;
