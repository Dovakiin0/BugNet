import {
  Menu,
  MenuButton,
  MenuList,
  Avatar,
  Text,
  Flex,
  MenuDivider,
  MenuItem,
  useDisclosure,
} from "@chakra-ui/react";
import { FaPowerOff } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import Settings from "./Settings";

export default function UserMenu({ user, logout }: any) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Settings isOpen={isOpen} onClose={onClose} user={user} />
      <Menu offset={[30, 20]}>
        <MenuButton>
          <Avatar
            bg="primary.100"
            color="black"
            name={user?.username}
            src={user?.avatar}
            width={10}
            height={10}
          />
        </MenuButton>
        <MenuList bg="primary.700" border="none">
          <Flex margin="10px" gap="2">
            <Text color="primary.300" fontSize={"sm"}>
              Signed in as:{" "}
            </Text>
            <Text color="primary.100" fontSize={"sm"} fontWeight={"bold"}>
              {user?.username}
            </Text>
          </Flex>
          <MenuDivider color={"brand.200"} />
          <MenuItem
            color="primary.100"
            bg="primary.700"
            _hover={{ bg: "brand.500" }}
            icon={<MdSettings size="20" />}
            onClick={onOpen}
          >
            Setttings
          </MenuItem>
          <MenuItem
            color="primary.100"
            _hover={{ bg: "brand.500" }}
            bg="primary.700"
            icon={<FaPowerOff size="20" />}
            onClick={logout}
          >
            Log Out
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
