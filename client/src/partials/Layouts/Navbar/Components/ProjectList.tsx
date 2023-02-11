import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaBook } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useProject } from "../../../../app/Project/hooks/useProject";
import Skeleton from "../../../../components/Skeleton";

type Props = {};

function ProjectList({}: Props) {
  const { isLoading, data } = useProject();

  return (
    <List spacing={3}>
      {isLoading ? (
        <Skeleton height="20px" />
      ) : (
        data.map((project: any) => (
          <ListItem
            key={project.id}
            fontWeight={"bold"}
            _hover={{ color: "purple.300" }}
          >
            <NavLink to={`/project/${project.id}`}>
              <ListIcon as={FaBook} />
              {project.title}
            </NavLink>
          </ListItem>
        ))
      )}
    </List>
  );
}

export default ProjectList;
