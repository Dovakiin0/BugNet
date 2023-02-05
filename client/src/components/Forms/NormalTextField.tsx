import { Input } from "@chakra-ui/react";

function NormalTextField({
  placeholder,
  size,
  onChange,
  onKeyDown,
  ...props
}: any) {
  return (
    <Input
      placeholder={placeholder}
      size={size || "sm"}
      borderColor={"primary.600"}
      borderRadius={"5px"}
      _hover={{ borderColor: "primary.500" }}
      _focus={{ borderColor: "brand.200" }}
      onChange={onChange}
      onKeyDown={onKeyDown}
      {...props}
    />
  );
}

export default NormalTextField;
