import { Box, Stack, Text } from "@chakra-ui/react";
import Bugs from "../../../components/Bugs";
import Skeleton from "../../../components/Skeleton";
import { BugsProps } from "../../../types/Bugs";
import { useBugs } from "../hooks/useBugs";

type Props = {};

function HighPriorityBugs({}: Props) {
  const { isLoading, data } = useBugs();

  return (
    <>
      <Box margin="10px" padding="20px" rounded={10} width="full">
        <Text fontWeight={"bold"} color="primary.200">
          Priority Bugs
        </Text>
        <Skeleton isLoading={isLoading}>
          <Stack direction={"column"} spacing="4" padding="10px">
            {!isLoading &&
              data.map((bug: BugsProps) => <Bugs key={bug.id} {...bug} />)}
          </Stack>
        </Skeleton>
      </Box>
    </>
  );
}

export default HighPriorityBugs;
