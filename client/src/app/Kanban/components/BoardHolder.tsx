import {
  Flex,
  Divider,
  Text,
  AvatarGroup,
  Avatar,
  Tooltip,
} from "@chakra-ui/react";
import { useDrag, useDrop } from "react-dnd";
import { NavLink, useNavigate } from "react-router-dom";
import io from "socket.io-client";

export default function BoardHolder({ info }: any) {
  const [config, drop] = useDrop(() => ({
    accept: "Bug",
    drop: (item: any) => addToBoard(item.bug.id),
    collect: (monitor) => {
      isOver: monitor.isOver();
    },
  }));
  let socket = io(`wss://${import.meta.env.VITE_DOMAIN_URI}`);

  const addToBoard = (id: number) => {
    let payload = {
      bugId: id,
      boardId: info.id,
    };
    socket.emit("KANBAN", payload);
    socket.disconnect();
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
      flexDir="column"
      bg="primary.700"
      padding="10px"
      marginTop="10px"
      rounded="3"
      _hover={{ cursor: "pointer" }}
      rotate={config.isDragging ? "20deg" : "0"}
      gap="1"
    >
      <Flex justify="space-between">
        <NavLink to={`/bugs/${bug.id}`}>
          <Text>
            #{bug.id}/{bug.title}
          </Text>
        </NavLink>
        <Text
          color={priorityList[bug.priority as keyof typeof priorityList].color}
          fontSize="sm"
        >
          {priorityList[bug.priority as keyof typeof priorityList].title}
        </Text>
      </Flex>
      <Tooltip
        hasArrow
        label={bug.Assignee.map((user: any) => user.Member.User.username).join(
          ", "
        )}
        placement="bottom"
      >
        <AvatarGroup>
          {bug.Assignee.map((user: any) => (
            <Avatar
              size="sm"
              name={user.Member.User.username}
              src={user.Member.User.avatar}
            />
          ))}
        </AvatarGroup>
      </Tooltip>
    </Flex>
  );
}
