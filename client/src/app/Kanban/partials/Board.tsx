import { Flex, Text } from "@chakra-ui/react";
import { useProjectById } from "../../Project/hooks/useProject";

type Props = {
  id: number;
};

export default function Board({ id }: Props) {
  const { data, isLoading } = useProjectById(id);

  return (
    !isLoading && (
      <Flex padding="20px" height="full" gap="3">
        <Text fontSize="sm" color="primary.200">
          {data.title}'s Board
        </Text>
      </Flex>
    )
  );
}
