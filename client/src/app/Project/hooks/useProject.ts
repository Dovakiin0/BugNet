import axios from "axios";
import { useQuery } from "react-query";

async function fetchProject() {
  const { data } = await axios.get("http://localhost:3030/projects");
  return data;
}

async function mutateProject() {
  const { data } = await axios.post("http://localhost:3030/projects");
  return data;
}

export const useProject = () => {
  return useQuery(["project"], () => fetchProject());
};
