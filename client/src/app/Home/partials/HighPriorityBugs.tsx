import { Box, Stack, Text } from "@chakra-ui/react";
import Bugs from "../../../components/Bugs";
import { BugsProps } from "../../../types/Bugs";
import { useBugs } from "../hooks/useBugs";
import Skeleton from "../../../components/Skeleton";

type Props = {};

function HighPriorityBugs({}: Props) {
  const { isLoading, data, isError } = useBugs();

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
          ) : (
            !isError &&
            data.map((bug: BugsProps) => <Bugs key={bug.id} {...bug} />)
          )}
        </Stack>
      </Box>
    </>
  );
}

export default HighPriorityBugs;
