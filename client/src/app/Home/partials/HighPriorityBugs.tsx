import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Bugs from "../components/Bugs";
type Props = {};

function HighPriorityBugs({}: Props) {
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
    {
      id: "4",
      title: "Cannot create new Bug",
      project: "BugNet",
      author: "Dovakiin0",
      priority: 0,
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
    {
      id: "4",
      title: "Cannot create new Bug",
      project: "BugNet",
      author: "Dovakiin0",
      priority: 0,
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
    {
      id: "4",
      title: "Cannot create new Bug",
      project: "BugNet",
      author: "Dovakiin0",
      priority: 0,
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
    {
      id: "4",
      title: "Cannot create new Bug",
      project: "BugNet",
      author: "Dovakiin0",
      priority: 0,
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
    {
      id: "4",
      title: "Cannot create new Bug",
      project: "BugNet",
      author: "Dovakiin0",
      priority: 0,
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
    {
      id: "4",
      title: "Cannot create new Bug",
      project: "BugNet",
      author: "Dovakiin0",
      priority: 0,
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
    {
      id: "4",
      title: "Cannot create new Bug",
      project: "BugNet",
      author: "Dovakiin0",
      priority: 0,
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
    {
      id: "4",
      title: "Cannot create new Bug",
      project: "BugNet",
      author: "Dovakiin0",
      priority: 0,
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
    {
      id: "4",
      title: "Cannot create new Bug",
      project: "BugNet",
      author: "Dovakiin0",
      priority: 0,
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
    <Box margin="10px" padding="20px" rounded={10} width="full">
      <Text fontWeight={"bold"} color="primary.200">
        Priority Bugs
      </Text>
      <Stack
        direction={"column"}
        spacing="4"
        padding="10px"
        overflowY="auto"
        maxHeight={"80vh"}
      >
        {bugs.slice(0, 10).map((bug) => (
          <Bugs key={bug.id} {...bug} />
        ))}
      </Stack>
      <NavLink to="/bugs">
        <Text margin="10px 0 0 20px" color="brand.800">
          View All
        </Text>
      </NavLink>
    </Box>
  );
}

export default HighPriorityBugs;
