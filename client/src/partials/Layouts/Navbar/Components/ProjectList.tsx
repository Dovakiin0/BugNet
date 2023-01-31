import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaBook } from "react-icons/fa";
import { NavLink } from "react-router-dom";

type Props = {
  projects: any[];
};

function ProjectList({ projects }: Props) {
  return (
    <List spacing={3}>
      {projects.map((project) => (
        <ListItem
          key={project.id}
          fontWeight={"bold"}
          _hover={{ color: "primary.200" }}
        >
          <NavLink to={`/project/${project.id}`}>
            <ListIcon as={FaBook} color="brand.200" />
            {project.title}
          </NavLink>
        </ListItem>
      ))}
    </List>
  );
}

export default ProjectList;
