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
  IconButton,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HeaderRoutes } from "../../../../Routes/HeaderRoutes";
import { MdSettings } from "react-icons/md";
import { FaBell, FaPowerOff } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useToast from "../../../../../hooks/useToast";
import { useAuthStore } from "../../../../../store/useStore";
import Notification from "./Notification";
import UserMenu from "./UserMenu";

type Props = {
  children: any;
};

function Header({ children }: Props) {
  const { successToast } = useToast();
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    successToast("Logged out successfully!");
  };

  return (
    <Flex
      direction={"column"}
      width="full"
      maxHeight={"100vh"}
      overflowY="auto"
    >
      <Box bgColor={"primary.800"} height="60px" padding="10px">
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
          <Flex marginRight={10} align="center" gap="3">
            <Notification user={user} />
            <UserMenu user={user} logout={logout} />
          </Flex>
        </Flex>
      </Box>
      {children}
    </Flex>
  );
}

export default Header;
