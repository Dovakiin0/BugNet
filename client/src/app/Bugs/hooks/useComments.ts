import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

async function getAllComment() {
  const { data } = await axios.get(
    `http://localhost:3030/api/v1/bugs/comment/recent`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return data;
}

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

async function deleteComment(id: number) {
  const { data } = await axios.delete(
    `http://localhost:3030/api/v1/bugs/comment/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return data;
}

export function useGetComment() {
  return useQuery(["comment"], getAllComment);
}

export function useCreateComment() {
  const client = useQueryClient();
  return useMutation(createComment, {
    onSuccess: (_, variables) => {
      client.invalidateQueries(["bugs", variables.bid]);
    },
  });
}

export function useDeleteComment() {
  const client = useQueryClient();
  return useMutation(deleteComment, {
    onSuccess: () => {
      client.invalidateQueries(["bugs"]);
    },
  });
}
