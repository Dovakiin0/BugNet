import { Stack, Box, Text, Flex, Button } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import Bugs from "../../../components/Bugs";

type Props = {};

export default function ProjectBugs({}: Props) {
  let bugs = [
    {
      id: "1",
      title: "Not Working",
      project: "BugNet",
      author: "Dovakiin0",
      priority: 2,
      createdAt: "2023-01-31",
    },
    {
      id: "2",
      title: "Cannot create new project",
      project: "BugNet",
      author: "Dovakiin0",
      priority: 2,
      createdAt: "2023-01-31",
    },
    {
      id: "3",
      title: "Cannot create new Board",
      project: "BugNet",
      author: "Dovakiin0",
      priority: 1,
      createdAt: "2023-01-31",
    },
    {
      id: "4",
      title: "Cannot create new Bug",
      project: "BugNet",
      author: "Dovakiin0",
      priority: 0,
      createdAt: "2023-01-31",
    },
  ];

  return (
    <Box rounded={10} width="full">
      <Flex justify={"space-between"} margin="10px">
        <Text fontSize={"xl"}>BUGS</Text>
        <Button
          leftIcon={<FaPlus />}
          colorScheme={"brand"}
          fontSize={"sm"}
          size="sm"
        >
          Create New
        </Button>
      </Flex>
      <Stack direction={"column"} spacing="4" padding="10px">
        {bugs.map((bug) => (
          <Bugs key={bug.id} {...bug} />
        ))}
      </Stack>
    </Box>
  );
}
