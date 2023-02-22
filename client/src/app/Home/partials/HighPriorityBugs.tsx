import { Box, Stack, Text } from "@chakra-ui/react";
import Bugs from "../../../components/Bugs";
import { BugsProps } from "../../../types/Bugs";
import { useBugs } from "../hooks/useBugs";
import Skeleton from "../../../components/Skeleton";
import Empty from "../../../components/Empty";
import useToast from "../../../hooks/useToast";

type Props = {};

function HighPriorityBugs({}: Props) {
  const { isLoading, data, isError, error } = useBugs();
  const { errorToast } = useToast();

  if (isError) {
    errorToast("Error getting results");
  }

  return (
    <>
      <Box margin="10px" padding="20px" rounded={10} width="full">
        <Text fontWeight={"bold"} color="primary.200">
          Recent Bugs
        </Text>
        <Stack direction={"column"} spacing="4" padding="10px">
          {isLoading ? (
            <>
              <Skeleton height="60px" />
            </>
          ) : data.length > 0 ? (
            data.map((bug: any) => (
              <Bugs
                key={bug.id}
                projectTitle={bug.Project.title}
                author={bug.User.username}
                {...bug}
              />
            ))
          ) : (
            <Empty message="Newly created bugs from across your projects will appear here" />
          )}
        </Stack>
      </Box>
    </>
  );
}

export default HighPriorityBugs;
