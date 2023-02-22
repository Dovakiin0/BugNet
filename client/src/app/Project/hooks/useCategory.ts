import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

async function createCategory(params: any) {
  const { data } = await axios.post(
    `http://localhost:3030/api/v1/categories/${params.pid}`,
    { title: params.title },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return data;
}

async function deleteCategory(id: number) {
  const { data } = await axios.delete(
    `http://localhost:3030/api/v1/categories/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return data;
}

export const useDeleteCategory = () => {
  const query = useQueryClient();
  return useMutation(deleteCategory, {
    onSuccess: (data, variables, context: any) => {
      query.invalidateQueries(["project", variables]);
    },
  });
};

export const useCreateCategory = () => {
  const query = useQueryClient();
  return useMutation(createCategory, {
    onSuccess: (data, variables) => {
      query.invalidateQueries(["project", data.projectId]);
    },
  });
};
