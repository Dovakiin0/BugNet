import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";

async function fetchProject() {
  const { data } = await axios.get("http://localhost:3030/api/v1/projects", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return data;
}

async function fetchProjectById(id: number) {
  const { data } = await axios.get(
    `http://localhost:3030/api/v1/projects/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return data;
}

async function createProject(params: any) {
  const { data } = await axios.post(
    "http://localhost:3030/api/v1/projects",
    params,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return data;
}

async function editProject(params: any) {
  const { data } = await axios.put(
    `http://localhost:3030/api/v1/projects/${params.pid}`,
    {
      ...params.values,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return data;
}

export const useProject = () => {
  return useQuery(["project"], () => fetchProject());
};

export const useProjectById = (id: number) => {
  return useQuery(["project", id], () => fetchProjectById(id));
};

export const useEditProject = () => {
  const query = useQueryClient();
  return useMutation(editProject, {
    onSuccess: (data) => {
      query.invalidateQueries(["project", data.id]);
    },
  });
};

export const useCreateProject = () => {
  const query = useQueryClient();
  return useMutation(createProject, {
    onSuccess: () => {
      query.invalidateQueries(["project"]);
    },
  });
};
