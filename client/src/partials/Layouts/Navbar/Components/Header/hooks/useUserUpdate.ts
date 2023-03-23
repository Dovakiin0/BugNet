import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

async function updateUser(params: any) {
  const { data } = await axios.put(
    "/api/v1/auth/",
    { ...params },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return data;
}

export const useUserUpdate = () => {
  const client = useQueryClient();
  return useMutation(updateUser, {
    onSuccess: () => {
      client.invalidateQueries(["auth"]);
    },
  });
};
