import { Box, Flex, Text } from "@chakra-ui/react";

type Props = {};

function Project({}: Props) {
  return (
    <Flex flexDir="column">
      <Box bg="brand.800" backdropFilter="auto" backdropBlur="10px">
        <Flex margin="100px" flexDir={"column"}>
          <Text fontSize={"4xl"}>BugNet</Text>
          <Text fontSize={"sm"}>
            This is a short description about the project
          </Text>
        </Flex>
      </Box>
      <Flex flexDir="column" align="center" margin="5px">
        <Text fontSize={"xl"} fontWeight="light" letterSpacing={"0.4rem"}>
          Project Settings
        </Text>
      </Flex>
    </Flex>
  );
}

export default Project;
