import {
  Box,
  Flex,
  Spacer,
  Text,
  Avatar,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
  MenuDivider,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HeaderRoutes } from "../../../Routes/HeaderRoutes";
import { MdSettings } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa";

type Props = {
  children: any;
};

function Header({ children }: Props) {
  return (
    <Flex
      direction={"column"}
      width="full"
      maxHeight={"100vh"}
      overflowY="auto"
    >
      <Box
        bgColor={"primary.800"}
        height="60px"
        padding="10px"
        position={"sticky"}
      >
        <Flex align={"center"} gap="5">
          {HeaderRoutes.map((route, i) => (
            <NavLink key={i} to={route.path}>
              <Text
                fontSize={"sm"}
                fontWeight="bold"
                _hover={{ color: "primary.200" }}
              >
                {route.name}
              </Text>
            </NavLink>
          ))}
          <Spacer />
          <Box marginRight={10}>
            <Menu offset={[30, 20]}>
              <MenuButton>
                <Avatar
                  name="Dovakiin0"
                  src="https://avatars.githubusercontent.com/u/50291191?v=4"
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
                    Dovakiin0
                  </Text>
                </Flex>
                <MenuDivider color={"brand.200"} />
                <MenuItem
                  color="primary.100"
                  bg="primary.700"
                  _hover={{ bg: "brand.500" }}
                  icon={<MdSettings size="20" />}
                >
                  Setttings
                </MenuItem>
                <MenuItem
                  color="primary.100"
                  _hover={{ bg: "brand.500" }}
                  bg="primary.700"
                  icon={<FaPowerOff size="20" />}
                >
                  Log Out
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Box>
      {children}
    </Flex>
  );
}

export default Header;
