import { Flex, Text } from "@chakra-ui/react";

type Props = {
  message: string;
};

export default function Empty({ message }: Props) {
  return (
    <Flex
      align={"center"}
      justify="center"
      border="dotted"
      borderColor={"primary.700"}
      height="200px"
      rounded="xl"
      padding="10px"
    >
      <Flex align="center" gap="2">
        <Text color="primary.200" fontSize={"sm"}>
          {message}
        </Text>
      </Flex>
    </Flex>
  );
}
