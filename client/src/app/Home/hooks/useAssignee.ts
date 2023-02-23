import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

async function createAssignee(params: any) {
  const { data } = await axios.post(
    `http://localhost:3030/api/v1/bugs/assignee`,
    params,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return data;
}

async function deleteAssignee(id: number) {
  const { data } = await axios.delete(
    `http://localhost:3030/api/v1/bugs/assignee/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return data;
}

export const useCreateAssignee = () => {
  const client = useQueryClient();
  return useMutation(createAssignee, {
    onSuccess: (data, variables) => {
      Promise.all([
        client.invalidateQueries(["bugs", data.bugId]),
        client.invalidateQueries(["bugs", "@me", "assigned"]),
      ]);
    },
  });
};

export const useDeleteAssignee = () => {
  const client = useQueryClient();
  return useMutation(deleteAssignee, {
    onSuccess: (data, variables) => {
      Promise.all([
        client.invalidateQueries(["bugs", data.bugId]),
        client.invalidateQueries(["bugs", "@me", "assigned"]),
      ]);
    },
  });
};
