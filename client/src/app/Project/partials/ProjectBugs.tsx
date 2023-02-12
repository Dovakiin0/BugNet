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
import Skeleton from "../../../components/Skeleton";
import { BugsProps } from "../../../types/Bugs";
import { useBugs } from "../../Home/hooks/useBugs";
import CreateBugModal from "../components/BugModal";

type Props = {};

export default function ProjectBugs({}: Props) {
  const bugsModal = useDisclosure();
  const { isLoading, data, isError } = useBugs();

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
          {isLoading ? (
            <Skeleton height="40px" />
          ) : (
            !isError &&
            data.map((bug: BugsProps) => <Bugs key={bug.id} {...bug} />)
          )}
        </Stack>
      </Box>
    </>
  );
}
