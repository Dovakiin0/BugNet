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
        bgColor={active ? "brand.200" : "brand.800"}
        height="40px"
        rounded="md"
        align="center"
        padding="15px"
      >
        <Icon
          as={BarIcon}
          color={active ? "brand.800" : "brand.200"}
          boxSize="25px"
        />
        <Text
          color={active ? "brand.800" : "brand.200"}
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
