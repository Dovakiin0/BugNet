import { Flex, Divider, Text } from "@chakra-ui/react";
import { useDrag, useDrop } from "react-dnd";
import io from "socket.io-client";

export default function BoardHolder({ info }: any) {
  const [config, drop] = useDrop(() => ({
    accept: "Bug",
    drop: (item: any) => addToBoard(item.bug.id),
    collect: (monitor) => {
      isOver: monitor.isOver();
    },
  }));
  let socket = io("ws://localhost:3030");

  const addToBoard = (id: number) => {
    let payload = {
      bugId: id,
      boardId: info.id,
    };
    socket.emit("KANBAN", payload);
  };

  return (
    <Flex
      ref={drop}
      bg="primary.800"
      padding="20px"
      minWidth="300px"
      rounded="10"
      flexDir="column"
    >
      <Text>{info.title}</Text>
      <Divider />
      {info.Bug.map((bug: any) => (
        <Draggable bug={bug} />
      ))}
    </Flex>
  );
}

function Draggable({ bug }: any) {
  const priorityList = {
    0: {
      color: "gray.300",
      title: "Low",
    },
    1: {
      color: "orange.300",
      title: "High",
    },
    2: {
      color: "red.300",
      title: "Critical",
    },
  };

  const [config, drag] = useDrag(() => ({
    type: "Bug",
    item: { bug: bug },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  }));

  return (
    <Flex
      ref={drag}
      justify="space-between"
      bg="primary.700"
      padding="10px"
      marginTop="10px"
      rounded="3"
      align="center"
      _hover={{ cursor: "pointer" }}
      rotate={config.isDragging ? "20deg" : "0"}
    >
      <Text>
        #{bug.id}/{bug.title}
      </Text>
      <Text
        color={priorityList[bug.priority as keyof typeof priorityList].color}
        fontSize="sm"
      >
        Low
      </Text>
    </Flex>
  );
}
