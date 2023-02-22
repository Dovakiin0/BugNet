import { Box, Text, Flex } from "@chakra-ui/react";
import Activity from "../components/Activity";
import Empty from "../../../components/Empty";
type Props = {};

function RecentActivities({}: Props) {
  return (
    <Box
      margin="10px"
      padding="20px"
      rounded={10}
      maxWidth="400px"
      width="400px"
    >
      <Text fontWeight={"bold"} color="primary.200">
        Activities
      </Text>
      <Flex flexDir="column" gap="3">
        {/* Only limited number of recent activities */}
        <Empty message="404 Activites not found" />
      </Flex>
    </Box>
  );
}

export default RecentActivities;
