import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

function Header({}: Props) {
  return (
    <Flex direction={"column"}>
      <Box>Header</Box>
      <Outlet />
    </Flex>
  );
}

export default Header;
