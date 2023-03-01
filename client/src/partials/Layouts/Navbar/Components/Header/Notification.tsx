import {
  Menu,
  Text,
  MenuButton,
  MenuList,
  IconButton,
  Flex,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";

export default function Notification() {
  return (
    <Menu offset={[30, 30]}>
      <MenuButton>
        <Avatar icon={<FaBell />} bg="primary.900">
          <AvatarBadge boxSize="1em" bg="red.500" borderColor="primary.900" />
        </Avatar>
      </MenuButton>
      <MenuList bg="primary.700" border="none">
        <Flex padding="10px">
          <Text color="primary.200" fontSize="sm">
            Notifications
          </Text>
          {/* Custom Noticiations component based on notification type */}
        </Flex>
      </MenuList>
    </Menu>
  );
}
