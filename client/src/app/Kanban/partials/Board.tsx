import { Flex, Text } from "@chakra-ui/react";
import { useProjectById } from "../../Project/hooks/useProject";
import BoardHolder from "../components/BoardHolder";
import { useKanban } from "../hooks/usekanban";
import io from "socket.io-client";
import { useEffect } from "react";
import { useQueryClient } from "react-query";

type Props = {
  id: number;
};

export default function Board({ id }: Props) {
  const projectQuery = useProjectById(id);
  const kanbanQuery = useKanban(id);
  const query = useQueryClient();

  let socket: any;
  useEffect(() => {
    socket = io("ws://localhost:3030");
    socket.on("KANBAN_RESPONSE", (_: any) => {
      query.invalidateQueries(["kanban", id]);
    });
  }, [socket]);

  return (
    <>
      {!projectQuery.isLoading && (
        <Flex flexDir="column" padding="20px" height="full" gap="3">
          <Text fontSize="sm" color="primary.200">
            {projectQuery.data.title}'s Board
          </Text>
          <Flex gap="3">
            {kanbanQuery.data &&
              kanbanQuery.data.Board.map((b: any) => (
                <BoardHolder info={b} key={b.id} />
              ))}
          </Flex>
        </Flex>
      )}
    </>
  );
}
