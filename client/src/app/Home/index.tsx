import { Box, Flex } from "@chakra-ui/react";
import HighPriorityBugs from "./partials/HighPriorityBugs";
import RecentActivities from "./partials/RecentActivities";
import RecentBugs from "./partials/RecentBugs";

type Props = {};

function Home({}: Props) {
  return (
    <Flex flexGrow={"1"}>
      <HighPriorityBugs />
      <RecentActivities />
    </Flex>
  );
}

export default Home;
