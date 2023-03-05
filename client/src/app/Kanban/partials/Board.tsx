import { Divider, Flex, Text } from "@chakra-ui/react";
import { useProjectById } from "../../Project/hooks/useProject";
import BoardHolder from "../components/BoardHolder";

type Props = {
  id: number;
};

export default function Board({ id }: Props) {
  const { data, isLoading } = useProjectById(id);
  const board = [
    {
      id: 1,
      title: "Backlog",
    },
    {
      id: 2,
      title: "Todo",
    },
    {
      id: 3,
      title: "Doing",
    },
    {
      id: 3,
      title: "Completed",
    },
  ];

  return (
    <>
      {!isLoading && (
        <Flex flexDir="column" padding="20px" height="full" gap="3">
          <Text fontSize="sm" color="primary.200">
            {data.title}'s Board
          </Text>
          <Flex gap="3">
            {board.map((b) => (
              <BoardHolder info={b} key={b.id} />
            ))}
          </Flex>
        </Flex>
      )}
    </>
  );
}
