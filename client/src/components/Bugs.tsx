import { Flex, Box, Text } from "@chakra-ui/react";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { ProjectProps } from "../types/Project";

type Props = {
  id: string;
  title: string;
  projectId: string;
  Project: ProjectProps;
  author: string;
  createdAt: string;
  priority: number;
};

function Bugs({
  id,
  title,
  projectId,
  projectTitle,
  author,
  createdAt,
  priority,
}: any) {
  const priorityList = {
    0: {
      color: "gray.300",
      title: "Low",
    },
    1: {
      color: "orange.300",
      title: "High",
    },
    2: {
      color: "red.300",
      title: "Critical",
    },
  };

  return (
    <Box padding="10px" bg="primary.800" rounded="10">
      <Flex gap="5" align="center">
        <Flex flexDir="column" gap="1">
          <Flex gap="2" align="center">
            <NavLink to={`/bugs/${id}`}>
              <Text
                fontWeight={"bold"}
                fontSize="md"
                _hover={{ color: "purple.300" }}
              >
                #{id}/{title}
              </Text>
            </NavLink>
            <NavLink to={`/project/${projectId}`}>
              <Text
                fontWeight={"bold"}
                fontSize="sm"
                color="primary.200"
                _hover={{ color: "purple.300" }}
              >
                -- {projectTitle} |
              </Text>
            </NavLink>
            <Text
              color={priorityList[priority as keyof typeof priorityList].color}
            >
              {priorityList[priority as keyof typeof priorityList].title}
            </Text>
          </Flex>
          <Flex gap="3" align="center">
            <Text fontSize="sm" color="primary.200">
              Opened by:
            </Text>
            <Text fontSize="sm">{author}</Text>
            <Text fontSize={"sm"} color="primary.200">
              {moment(createdAt).fromNow()}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Bugs;
