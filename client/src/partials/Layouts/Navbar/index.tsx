import { Flex } from "@chakra-ui/react";
import Header from "./Components/Header";
import SideNav from "./Components/SideNav";

type Props = {};

function Navbar({}: Props) {
  return (
    <>
      <Flex>
        <SideNav />
        <Header />
      </Flex>
    </>
  );
}

export default Navbar;
