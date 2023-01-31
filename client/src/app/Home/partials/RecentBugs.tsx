import React from "react";
import { Box, Text } from "@chakra-ui/react";

type Props = {};

function RecentBugs({}: Props) {
  return (
    <Box
      bg="primary.800"
      margin="10px"
      padding="20px"
      rounded={10}
      height="full"
    >
      <Text fontWeight={"bold"} color="primary.200">
        Recent Bugs Listings
      </Text>
    </Box>
  );
}

export default RecentBugs;
