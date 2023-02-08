import {
  Stack,
  Box,
  Text,
  Flex,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import Bugs from "../../../components/Bugs";
import NormalTextField from "../../../components/Forms/NormalTextField";
import CreateBugModal from "../components/BugModal";

type Props = {};

export default function ProjectBugs({}: Props) {
  const bugsModal = useDisclosure();
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
    <>
      <CreateBugModal isOpen={bugsModal.isOpen} onClose={bugsModal.onClose} />
      {/*might need to pass project id*/}
      <Box rounded={10} width="full">
        <Flex justify={"space-between"} margin="10px">
          <Text fontSize={"xl"}>BUGS</Text>
          <Button
            leftIcon={<FaPlus />}
            colorScheme={"brand"}
            fontSize={"sm"}
            size="sm"
            onClick={bugsModal.onOpen}
          >
            Create New
          </Button>
        </Flex>
        <Box margin="10px">
          <NormalTextField placeholder="Search in this project" size="md" />
        </Box>
        <Stack direction={"column"} spacing="4" padding="10px">
          {bugs.map((bug) => (
            <Bugs key={bug.id} {...bug} />
          ))}
        </Stack>
      </Box>
    </>
  );
}
