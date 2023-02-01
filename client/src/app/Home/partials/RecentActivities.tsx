import { Box, Text } from "@chakra-ui/react";
import Activity from "../components/Activity";
type Props = {};

function RecentActivities({}: Props) {
  return (
    <Box
      margin="10px"
      padding="20px"
      rounded={10}
      maxWidth="400px"
      width="400px"
      // overflowX={"hidden"}
      // overflowY="auto"
    >
      <Text fontWeight={"bold"} color="primary.200">
        Activities
      </Text>
      <Box maxHeight={"10vh"}>
        <Activity />
        <Activity />
      </Box>
    </Box>
  );
}

export default RecentActivities;
