import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import SideNav from "./Components/SideNav";

type Props = {};

function Navbar({}: Props) {
  return (
    <>
      <Flex>
        <SideNav />
        <Header>
          <Outlet />
        </Header>
      </Flex>
    </>
  );
}

export default Navbar;
