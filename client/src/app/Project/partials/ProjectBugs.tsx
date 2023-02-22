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
import Empty from "../../../components/Empty";
import NormalTextField from "../../../components/Forms/NormalTextField";
import Skeleton from "../../../components/Skeleton";
import CreateBugModal from "../components/BugModal";

export default function ProjectBugs({ isLoading, project }: any) {
  const bugsModal = useDisclosure();

  return (
    <>
      <CreateBugModal
        isOpen={bugsModal.isOpen}
        onClose={bugsModal.onClose}
        project={project}
      />
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
          {isLoading ? (
            <Skeleton height="40px" />
          ) : project.Bug.length > 0 ? (
            project.Bug.map((bug: any) => (
              <Bugs
                key={bug.id}
                projectTitle={project.title}
                author={bug.User.username}
                {...bug}
              />
            ))
          ) : (
            <Empty message="Create a new bug to get started!" />
          )}
        </Stack>
      </Box>
    </>
  );
}
