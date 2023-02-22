import { useQuery } from "react-query";
import axios from "axios";

async function fetchAssignedBugs() {
  const { data } = await axios.get("/bugs/@me/assigned", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return data;
}

export function useAssignedBugs() {
  return useQuery(["bugs", "@me", "assigned"], fetchAssignedBugs);
}
