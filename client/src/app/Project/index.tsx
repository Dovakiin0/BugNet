import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useProjectById } from "./hooks/useProject";
import ProjectBugs from "./partials/ProjectBugs";
import ProjectSettings from "./partials/ProjectSettings";
import Skeleton from "../../components/Skeleton";

type Props = {};

function Project({}: Props) {
  const { id } = useParams();
  const projectQuery = useProjectById(Number(id));

  return (
    <Flex flexDir="column" gap="10">
      <Box bg="brand.800">
        {projectQuery.isLoading ? (
          <Skeleton height="50px" />
        ) : (
          !projectQuery.isError && (
            <Flex margin="100px" flexDir={"column"}>
              <Text fontSize={"4xl"}>{projectQuery.data.title}</Text>
              <Text fontSize={"sm"}>{projectQuery.data.description}</Text>
            </Flex>
          )
        )}
      </Box>
      <Flex gap="5">
        <ProjectBugs />
        <Divider orientation="vertical" height="50vh" />
        <ProjectSettings />
      </Flex>
    </Flex>
  );
}

export default Project;
