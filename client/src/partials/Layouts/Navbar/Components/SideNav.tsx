import React from "react";
import { Flex, Box, Image, Text } from "@chakra-ui/react";

type Props = {};

function SideNav({}: Props) {
  return (
    <Flex
      flexDirection={"column"}
      width="300px"
      bgColor={"primary.800"}
      height="100vh"
    >
      <Box margin={"20px"}>
        {/* Logo */}
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Box boxSize={"30px"} marginRight="20px">
            <Image src="/LogoNoBack.png" alt="logo" />
          </Box>
          <Text
            color="primary.100"
            fontWeight={"extrabold"}
            fontSize={"2xl"}
            letterSpacing="4px"
          >
            BUGNET
          </Text>
        </Flex>

        {/* Navigation Items */}
        <Flex marginTop={"50px"} gap="5" flexDir={"column"}>
          {/* {sidebarRoutes.map((route) => (
        <SideBarItem
          key={route.name}
          {...route}
          active={useMatchPath(route.path)}
        />
      ))} */}
        </Flex>
      </Box>
    </Flex>
  );
}

export default SideNav;
