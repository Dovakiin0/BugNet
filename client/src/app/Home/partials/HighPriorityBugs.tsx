import { Box, Text } from "@chakra-ui/react";
type Props = {};

function HighPriorityBugs({}: Props) {
  return (
    <Box
      bg="primary.800"
      margin="10px"
      padding="20px"
      rounded={10}
      height="full"
    >
      <Text fontWeight={"bold"} color="primary.200">
        Priority Bugs
      </Text>
    </Box>
  );
}

export default HighPriorityBugs;
