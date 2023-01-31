import { Flex, Avatar, Text } from "@chakra-ui/react";
import moment from "moment";

type Props = {};

function Activity({}: Props) {
  return (
    <Flex marginTop="20px" gap="5">
      <Avatar
        name="Dovakiin0"
        src="https://avatars.githubusercontent.com/u/50291191?v=4"
        width={8}
        height={8}
      />
      <Flex flexDir="column">
        <Text color="primary.200" fontSize={"sm"}>
          Dovakiin0 commented on #2
        </Text>
        <Text color="primary.300" fontSize={"xs"}>
          {moment("2023-01-28T12:00:00").fromNow()}
        </Text>
      </Flex>
    </Flex>
  );
}

export default Activity;
