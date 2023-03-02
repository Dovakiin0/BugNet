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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaBell, FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import io from "socket.io-client";

export default function Notification() {
  let [notifications, setNotifications] = useState<any | any[]>(["hello"]);
  let socket: any = null;

  useEffect(() => {
    socket = io("ws://localhost:3030");
    socket.on("TEAM_ADD_RESPONSE", (data: any) => {
      setNotifications((prev: any) => [...prev, data]);
    });
  }, [socket]);

  return (
    <Menu offset={[30, 30]}>
      <MenuButton>
        <Avatar icon={<FaBell />} bg="primary.900">
          <AvatarBadge boxSize="1em" bg="red.500" borderColor="primary.900" />
        </Avatar>
      </MenuButton>
      <MenuList bg="primary.700" border="none" width="400px">
        <Flex padding="10px" flexDir="column" gap="3">
          <Text color="primary.200" fontSize="sm">
            Notifications
          </Text>
          {/* Custom Noticiations component based on notification type */}
          {notifications.length > 0 &&
            notifications.map((n: any) => (
              <Flex flexDir="column" padding="5px" rounded="10" gap="2">
                <Flex gap="2" align="center">
                  <Text fontSize="sm">{"Bishal"}</Text>
                  <Text fontSize="sm" color="primary.200">
                    Invited you on Project
                  </Text>
                  <Text fontSize="sm">{"Bugnet"}</Text>
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
            ))}
        </Flex>
      </MenuList>
    </Menu>
  );
}
