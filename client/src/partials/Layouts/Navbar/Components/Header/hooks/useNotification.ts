import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

async function fetchNotification() {
  const { data } = await axios.get(
    "http://localhost:3030/api/v1/notification",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return data;
}

async function readNotification(id: number) {
  const { data } = await axios.post(
    `http://localhost:3030/api/v1/notification/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return data;
}

export const useFetchNotification = () => {
  return useQuery(["notification"], fetchNotification);
};

export const useReadNotification = () => {
  const client = useQueryClient();
  return useMutation(readNotification, {
    onSuccess: () => {
      Promise.all([
        client.invalidateQueries(["project"]),
        client.invalidateQueries(["notification"]),
      ]);
    },
  });
};
