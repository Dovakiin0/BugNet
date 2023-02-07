import { Box, Flex, Tag, Text } from "@chakra-ui/react";

type Props = {};

function Bugs({}: Props) {
  return (
    <Flex flexDir="column">
      <Box bg="brand.800" padding="30px">
        <Flex flexDir={"column"}>
          <Text fontSize={"2xl"}>BugNet</Text>
        </Flex>
      </Box>
      <Flex padding="50px" flexDir="column">
        <Flex align="center" gap="3">
          <Text fontSize="4xl" color="primary.200">
            #1
          </Text>
          <Text fontSize="4xl">Cannot Login</Text>
        </Flex>
        <Flex gap="3" align="center">
          <Text fontSize="lg" color="primary.200">
            Opened by :
          </Text>
          <Text fontSize="lg">Dovakiin0</Text>
          <Text color="primary.200" fontSize={"lg"}>
            Feb 7, 2023
          </Text>
          <Text fontSize="lg" color="red.300">
            Critical
          </Text>
          <Tag
            size="lg"
            colorScheme="green"
            borderRadius={"full"}
            variant="subtle"
          >
            Open
          </Tag>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Bugs;
