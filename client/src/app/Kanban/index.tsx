import { Flex, Text, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { FaBook } from "react-icons/fa";
import Skeleton from "../../components/Skeleton";
import Loader from "../../partials/Loader";
import { useProject } from "../Project/hooks/useProject";
import Board from "./partials/Board";

type Props = {};

function Kanban({ }: Props) {
  const projectsQuery = useProject();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <Flex padding="10px" height="full" gap="3">
      {/* Tabs */}
      <Flex
        flexDir="column"
        padding="20px"
        bg="primary.800"
        rounded="10"
        gap="5"
        width="300px"
        overflowY="auto"
        maxHeight="90vh"
      >
        <Text fontSize="sm" color="primary.200">
          Your Projects
        </Text>
        {projectsQuery.isLoading ? (
          <Stack>
            <Skeleton height="20px" />
          </Stack>
        ) : (
          projectsQuery.data.map((project: any) => (
            <Flex
              gap="3"
              align="center"
              bg="primary.900"
              borderStyle="dashed"
              rounded="10"
              padding="10px"
              _hover={{
                cursor: "pointer",
                bg: "primary.800",
              }}
              onClick={() => setSelectedProject(project.id)}
            >
              <FaBook />
              <Text fontSize="sm">{project.title}</Text>
            </Flex>
          ))
        )}
      </Flex>
      {/* Board */}
      {selectedProject ? (
        <Flex bg="primary.800" rounded="10" width="full" maxHeight="90vh">
          <Board id={selectedProject} />
        </Flex>
      ) : (
        <Flex
          bg="primary.800"
          rounded="10"
          width="full"
          maxHeight="90vh"
          padding="20px"
        >
          <Text color="primary.200">Select a project</Text>
        </Flex>
      )}
    </Flex>
  );
}

export default Kanban;
