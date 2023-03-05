import axios from "axios";
import { useQuery } from "react-query";

async function getProjectBoard(id: number) {
  try {
    const { data } = await axios.get(
      `http://localhost:3030/api/v1/projects/${id}/board`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error;
  }
}

export const useKanban = (id: number) => {
  return useQuery(["kanban", id], () => getProjectBoard(id));
};
