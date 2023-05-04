import {
  Menu,
  Text,
  MenuButton,
  MenuList,
  IconButton,
  Flex,
  Avatar,
  AvatarBadge,
  Spacer,
  Divider,
} from "@chakra-ui/react";
import moment from "moment";
import { useEffect, useState } from "react";
import { FaBell, FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import io from "socket.io-client";
import { useApproveTeam } from "../../../../../app/Project/hooks/useTeam";
import useToast from "../../../../../hooks/useToast";
import { NotificationType } from "../../../../../types/Notification";
import {
  useFetchNotification,
  useReadNotification,
} from "./hooks/useNotification";

export default function Notification({ user }: any) {
  let [notifications, setNotifications] = useState<NotificationType[]>([]);
  const { data, isSuccess, isLoading } = useFetchNotification();
  const notificationQuery = useReadNotification();
  const teamQuery = useApproveTeam();
  let socket: any = null;
  const { successToast } = useToast();

  useEffect(() => {
    if (isSuccess) setNotifications(data);
  }, [isSuccess, isLoading]);

  useEffect(() => {
    socket = io(`${import.meta.env.VITE_SOCKET_DOMAIN_URI}`);
    socket.on("TEAM_ADD_RESPONSE", (data: any) => {
      if (data.To.id !== user?.id) return;
      setNotifications([data, ...notifications]);
      const audio = new Audio("/bell.mp3");
      audio.muted = true;
      audio.play();
    });
  }, [socket]);

  const updateNotification = (id: number, pid: number, status: string) => {
    notificationQuery.mutateAsync(id, {
      onSuccess: (data) => {
        setNotifications(notifications.filter((n) => n.id !== data.id));
        successToast(
          status === "Accepted" ? "Invitation Accepted" : "Invitation Rejected"
        );
      },
    });
    teamQuery.mutateAsync({ pid, status });
  };

  return (
    <Menu>
      <MenuButton>
        <Avatar icon={<FaBell />} bg="primary.900">
          {notifications?.some((el: any) => !el.read) && (
            <AvatarBadge boxSize="1em" bg="red.500" borderColor="primary.900" />
          )}
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
          {notifications?.length > 0 ? (
            notifications
              .slice(0, 5)
              .map(
                (n: any, i: number) =>
                  !n.read && (
                    <NotificationList
                      notification={n}
                      key={i}
                      updateNotification={updateNotification}
                    />
                  )
              )
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

function NotificationList({ updateNotification, notification, props }: any) {
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
          {notification.message}
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
          onClick={() =>
            updateNotification(
              notification.id,
              notification.target_id,
              "Accepted"
            )
          }
        />

        <IconButton
          size="sm"
          icon={<RxCross2 />}
          aria-label="tick"
          variant="outline"
          color="red.500"
          _hover={{ bg: "red.500", color: "white" }}
          onClick={() =>
            updateNotification(
              notification.id,
              notification.target_id,
              "Rejected"
            )
          }
        />
      </Flex>
    </Flex>
  );
}
