import { Flex, Avatar, Text } from "@chakra-ui/react";
import moment from "moment";
import { NavLink } from "react-router-dom";

type Props = {
  comment: any;
};

function Activity({ comment }: Props) {
  return (
    <Flex marginTop="20px" gap="5" align="center">
      <Avatar name={comment.User.username} width={10} height={10} />
      <Flex flexDir="column">
        <NavLink to={`/bugs/${comment.Bug.id}`}>
          <Text
            color="primary.200"
            fontSize={"sm"}
            _hover={{ color: "purple.300" }}
          >
            {comment.User.username} commented on #{comment.Bug.id}/
            {comment.Bug.title} -- {comment.Bug.Project.title}
          </Text>
        </NavLink>
        <Text color="primary.300" fontSize={"xs"}>
          {moment(comment.createdAt).fromNow()}
        </Text>
      </Flex>
    </Flex>
  );
}

export default Activity;
