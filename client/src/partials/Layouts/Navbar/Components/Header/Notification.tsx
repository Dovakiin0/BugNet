import {
  Menu,
  Text,
  MenuButton,
  MenuList,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";

export default function Notification() {
  return (
    <Menu offset={[30, 30]}>
      <MenuButton>
        <IconButton
          aria-label="notification"
          bg="primary.800"
          color="primary.100"
          _hover={{ bg: "primary.900" }}
          icon={<FaBell />}
        />
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
