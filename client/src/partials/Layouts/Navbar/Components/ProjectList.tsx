import {
  List,
  ListItem,
  ListIcon,
  Tooltip,
  Text,
  Flex,
} from "@chakra-ui/react";
import { FaBook } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useProject } from "../../../../app/Project/hooks/useProject";
import Empty from "../../../../components/Empty";
import Skeleton from "../../../../components/Skeleton";

type Props = {};

function ProjectList({}: Props) {
  const { isLoading, data, isError } = useProject();

  return (
    <List spacing={3}>
      {isLoading ? (
        <Skeleton height="20px" />
      ) : !isError && data.length > 0 ? (
        data?.map((project: any) => (
          <ListItem
            key={project.id}
            fontWeight={"bold"}
            _hover={{ color: "purple.300" }}
          >
            <NavLink to={`/project/${project.id}`}>
              <Tooltip label={project.title} placement="right">
                <Flex align="center" gap="2">
                  <ListIcon as={FaBook} />
                  <Text fontSize="sm" _hover={{ color: "purple.300" }}>
                    {project.title}
                  </Text>
                </Flex>
              </Tooltip>
            </NavLink>
          </ListItem>
        ))
      ) : (
        <Empty message="Create new projects to get started" />
      )}
    </List>
  );
}

export default ProjectList;
