import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";

async function fetchProject() {
  const { data } = await axios.get("http://localhost:3030/projects");
  return data;
}

async function fetchProjectById(id: number) {
  const { data } = await axios.get(`http://localhost:3030/projects/${id}`);
  return data;
}

async function createProject(params: any) {
  const { data } = await axios.post("http://localhost:3030/projects", params);
  return data;
}

export const useProject = () => {
  return useQuery(["project"], () => fetchProject());
};

export const useProjectById = (id: number) => {
  return useQuery(["project", id], () => fetchProjectById(id));
};

export const useCreateProject = () => {
  const query = useQueryClient();
  return useMutation(createProject, {
    onSuccess: () => {
      query.invalidateQueries("project");
    },
  });
};
