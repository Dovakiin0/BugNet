import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

type Props = {};

function Layout({}: Props) {
  return (
    <>
      <Navbar />
    </>
  );
}

export default Layout;
