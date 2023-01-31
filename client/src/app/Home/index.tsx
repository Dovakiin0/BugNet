import { Box, Flex } from "@chakra-ui/react";
import HighPriorityBugs from "./partials/HighPriorityBugs";
import RecentActivities from "./partials/RecentActivities";
import RecentBugs from "./partials/RecentBugs";

type Props = {};

function Home({}: Props) {
  return (
    <Flex flexGrow={"1"}>
      <Flex direction={"column"} flexGrow="1">
        <HighPriorityBugs />
        <RecentBugs />
      </Flex>
      <RecentActivities />
    </Flex>
  );
}

export default Home;
