import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

type Props = {};

function Layout({}: Props) {
  return (
    <>
      <Flex>
        <Navbar />
        <Box margin="20px">
          <Outlet />
        </Box>
      </Flex>
    </>
  );
}

export default Layout;
