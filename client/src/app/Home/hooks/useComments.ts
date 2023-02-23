import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

async function createComment(params: any) {
  const { data } = await axios.post(
    `http://localhost:3030/api/v1/bugs/comment/${params.bid}`,
    { content: params.content },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return data;
}

export function useCreateComment() {
  const client = useQueryClient();
  return useMutation(createComment, {
    onSuccess: (data, variables) => {
      client.invalidateQueries(["bugs", variables.bid]);
    },
  });
}
