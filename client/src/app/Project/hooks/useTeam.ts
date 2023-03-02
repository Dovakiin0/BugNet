import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

async function createTeam(params: any) {
  const { data } = await axios.post(
    `http://localhost:3030/api/v1/projects/team/${params.pid}`,
    { email: params.email },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return data;
}

async function deleteTeam(id: number) {
  const { data } = await axios.delete(
    `http://localhost:3030/api/v1/projects/team/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return data;
}

async function updateTeamInvite(params: any) {
  const { data } = await axios.put(
    `http://localhost:3030/api/v1/projects/team/approve/${params.pid}`,
    {
      status: params.status,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return data;
}

export const useDeleteTeam = () => {
  const query = useQueryClient();
  return useMutation(deleteTeam, {
    onSuccess: () => {
      query.invalidateQueries(["project"]);
    },
  });
};

export const useCreateTeam = () => {
  const query = useQueryClient();
  return useMutation(createTeam, {
    onSuccess: (data) => {
      query.invalidateQueries(["project", data.projectId]);
    },
  });
};

export const useApproveTeam = () => {
  const query = useQueryClient();
  return useMutation(updateTeamInvite, {
    onSuccess: () => {
      query.invalidateQueries(["project"]);
    },
  });
};
