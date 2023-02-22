import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useProjectById } from "./hooks/useProject";
import ProjectBugs from "./partials/ProjectBugs";
import ProjectSettings from "./partials/ProjectSettings";
import Skeleton from "../../components/Skeleton";

type Props = {};

function Project({}: Props) {
  const { id } = useParams();
  const { data, isLoading, isError } = useProjectById(Number(id));

  return (
    <Flex flexDir="column" gap="10">
      <Box bg="brand.800">
        {isLoading ? (
          <Skeleton height="50px" />
        ) : (
          !isError && (
            <Flex margin="100px" flexDir={"column"}>
              <Text fontSize={"4xl"}>{data.title}</Text>
              <Text fontSize={"sm"}>{data.description}</Text>
            </Flex>
          )
        )}
      </Box>
      <Flex gap="5">
        {isLoading ? (
          <Skeleton height="50px" />
        ) : (
          <>
            <ProjectBugs isLoading={isLoading} project={data} />
            <Divider orientation="vertical" height="50vh" />
            <ProjectSettings
              categories={data.Category}
              teams={data.Member}
              pid={data.id}
            />
          </>
        )}
      </Flex>
    </Flex>
  );
}

export default Project;
