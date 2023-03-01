import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import { Box, Flex, Text } from "@chakra-ui/react";
import HighPriorityBugs from "./partials/HighPriorityBugs";
import RecentActivities from "./partials/RecentActivities";
type Props = {};

function Home({ }: Props) {
  const [response, setResponse] = useState<any | null>(null);

  const socket = socketIOClient("http://localhost:3030");
  useEffect((): any => {
    socket.on("TEAM_ADD_RESPONSE", (data) => {
      setResponse(data);
    });

    return () => socket.disconnect();
  }, [socket, response]);

  const handleSocket = (e: any) => {
    console.log(e.target.value);
    socket.emit("TEAM_ADD", e.target.value);
  };

  return (
    <>
      <Flex flexGrow={"1"}>
        <HighPriorityBugs />
        <RecentActivities />
      </Flex>
    </>
  );
}

export default Home;
