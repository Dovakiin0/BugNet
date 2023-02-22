import axios from "axios";
import { useQuery } from "react-query";

const fetchBugs = async () => {
  const { data } = await axios.get("http://localhost:3030/api/v1/bugs");
  return data;
};

export function useBugs() {
  return useQuery(["bugs"], () => fetchBugs());
}
