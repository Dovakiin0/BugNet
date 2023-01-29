import { Flex, Box, Center, Text, Spacer, Image, Icon } from "@chakra-ui/react";
import { sidebarRoutes } from "../../Routes/SidebarRoutes";
import SideBarItem from "./Components/SideBarItem";
import { useMatchPath } from "../../../helper/util";

type Props = {};

function Navbar({}: Props) {
  return (
    <Flex
      flexDirection={"column"}
      width="300px"
      bgColor={"brand.800"}
      height="100vh"
    >
      <Box margin={"20px"}>
        {/* Logo */}
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Box boxSize={"30px"} marginRight="20px">
            <Image src="/LogoNoBack.png" alt="logo" />
          </Box>
          <Text
            color="brand.100"
            fontWeight={"extrabold"}
            fontSize={"2xl"}
            letterSpacing="4px"
          >
            BUGNET
          </Text>
        </Flex>

        {/* Navigation Items */}
        <Flex marginTop={"50px"} gap="5" flexDir={"column"}>
          {sidebarRoutes.map((route) => (
            <SideBarItem
              key={route.name}
              {...route}
              active={useMatchPath(route.path)}
            />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}

export default Navbar;
