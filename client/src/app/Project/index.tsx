import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import ProjectBugs from "./partials/ProjectBugs";
import ProjectSettings from "./partials/ProjectSettings";

type Props = {};

function Project({}: Props) {
  return (
    <Flex flexDir="column" gap="10">
      <Box bg="brand.800" backdropFilter="auto" backdropBlur="10px">
        <Flex margin="100px" flexDir={"column"}>
          <Text fontSize={"4xl"}>BugNet</Text>
          <Text fontSize={"sm"}>
            This is a short description about the project
          </Text>
        </Flex>
      </Box>
      <Flex gap="5">
        <ProjectBugs />
        <Divider orientation="vertical" />
        <ProjectSettings />
      </Flex>
    </Flex>
  );
}

export default Project;
