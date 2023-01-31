import React from "react";
import { NavLink } from "react-router-dom";
import { Flex, Icon, Text } from "@chakra-ui/react";

type Props = {
  BarIcon: React.FC;
  name: string;
  path: string;
  active: Boolean;
};

function SideBarItem({ BarIcon, name, path, active }: Props) {
  return (
    <NavLink to={path}>
      <Flex
        bgColor={active ? "primary.100" : "primary.800"}
        height="40px"
        rounded="md"
        align="center"
        padding="15px"
      >
        <Icon
          as={BarIcon}
          color={active ? "primary.800" : "primary.100"}
          boxSize="25px"
        />
        <Text
          color={active ? "primary.800" : "primary.100"}
          fontWeight={"bold"}
          fontSize={"lg"}
          marginLeft="10px"
          casing={"uppercase"}
        >
          {name}
        </Text>
      </Flex>
    </NavLink>
  );
}

export default SideBarItem;
