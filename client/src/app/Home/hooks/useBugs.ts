import axios from "axios";
import { useQuery } from "react-query";

const fetchBugs = async () => {
  const { data } = await axios.get("/api/v1/bugs", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return data;
};

export function useBugs() {
  return useQuery(["bugs"], () => fetchBugs());
}
