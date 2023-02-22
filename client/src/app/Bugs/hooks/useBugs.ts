import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

async function fetchAssignedBugs() {
  const { data } = await axios.get(
    "http://localhost:3030/api/v1/bugs/@me/assigned",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return data;
}

async function createBug(params: any) {
  const { data } = await axios.post(
    "http://localhost:3030/api/v1/bugs",
    params,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return data;
}

async function fetchBugsById(id: number) {
  const { data } = await axios.get(`http://localhost:3030/api/v1/bugs/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return data;
}

export function useFetchBugById(id: number) {
  return useQuery(["bugs", id], () => fetchBugsById(id));
}

export function useAssignedBugs() {
  return useQuery(["bugs", "@me", "assigned"], fetchAssignedBugs);
}

export function useCreateBug() {
  const client = useQueryClient();
  return useMutation(createBug, {
    onSuccess: (data, variables) => {
      Promise.all([
        client.invalidateQueries(["bugs"]),
        client.invalidateQueries(["project", data.projectId]),
      ]);
    },
  });
}
