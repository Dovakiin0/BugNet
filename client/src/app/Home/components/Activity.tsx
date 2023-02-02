import { Flex, Avatar, Text } from "@chakra-ui/react";
import moment from "moment";
import { NavLink } from "react-router-dom";

type Props = {};

function Activity({}: Props) {
  return (
    <Flex marginTop="20px" gap="5" align="center">
      <Avatar
        name="Dovakiin0"
        src="https://avatars.githubusercontent.com/u/50291191?v=4"
        width={10}
        height={10}
      />
      <Flex flexDir="column">
        <NavLink to="/bugs">
          <Text
            color="primary.200"
            fontSize={"sm"}
            _hover={{ color: "purple.300" }}
          >
            Dovakiin0 commented on #2/Cannot Create Bugs Please Helo Project
            name
          </Text>
        </NavLink>
        <Text color="primary.300" fontSize={"xs"}>
          {moment("2023-01-28T12:00:00").fromNow()}
        </Text>
      </Flex>
    </Flex>
  );
}

export default Activity;
