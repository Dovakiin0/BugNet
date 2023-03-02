import {
  Menu,
  Text,
  MenuButton,
  MenuList,
  IconButton,
  Flex,
  Avatar,
  AvatarBadge,
  Box,
  Spacer,
  Divider,
} from "@chakra-ui/react";
import moment from "moment";
import { useEffect, useState } from "react";
import { FaBell, FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import io from "socket.io-client";

import bellSound from "/bell.mp3";

export default function Notification() {
  let [notifications, setNotifications] = useState<any | any[]>([]);
  let socket: any = null;

  useEffect(() => {
    socket = io("ws://localhost:3030");
    socket.on("TEAM_ADD_RESPONSE", (data: any) => {
      setNotifications((prev: any) => [...prev, data]);
      const audio = new Audio("/bell.mp3");
      audio.muted = true;
      audio.play();
    });
  }, [socket]);

  return (
    <Menu offset={[30, 30]}>
      <MenuButton>
        <Avatar icon={<FaBell />} bg="primary.900">
          <AvatarBadge boxSize="1em" bg="red.500" borderColor="primary.900" />
        </Avatar>
      </MenuButton>
      <MenuList
        bg="primary.800"
        border="none"
        width="400px"
        maxHeight="350px"
        height="350px"
      >
        <Flex padding="10px" flexDir="column" gap="3">
          <Text color="primary.200" fontSize="sm">
            Notifications
          </Text>
          <Divider />
          {/* Custom Noticiations component based on notification type */}
          {notifications.length > 0 ? (
            notifications.map((n: any, i: number) => (
              <NotificationList notification={n} key={i} />
            ))
          ) : (
            <Flex height="200px" align="center" justify="center">
              <Text color="primary.200">No New Notification</Text>
            </Flex>
          )}
        </Flex>
      </MenuList>
    </Menu>
  );
}

function NotificationList({ notification, props }: any) {
  return (
    <Flex
      {...props}
      flexDir="column"
      padding="10px"
      rounded="10"
      gap="2"
      bg="primary.700"
    >
      <Flex gap="2" align="center">
        <Text fontSize="sm">
          {notification.User.username} invited you to Project
          {notification.Project.title}
          <Text color="primary.200">
            {moment(notification.createdAt).fromNow()}
          </Text>
        </Text>
        <Spacer />
        <IconButton
          size="sm"
          icon={<FaCheck />}
          aria-label="tick"
          variant="outline"
          color="green.500"
          _hover={{ bg: "green.500", color: "white" }}
        />

        <IconButton
          size="sm"
          icon={<RxCross2 />}
          aria-label="tick"
          variant="outline"
          color="red.500"
          _hover={{ bg: "red.500", color: "white" }}
        />
      </Flex>
    </Flex>
  );
}
