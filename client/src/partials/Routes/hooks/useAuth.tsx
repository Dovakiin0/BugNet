import axios from "axios";
import { useQuery } from "react-query";

async function getAuth() {
  const { data } = await axios.get("http://localhost:3030/api/v1/auth/@me", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return data;
}

export const useAuth = () => {
  return useQuery(["auth"], () => getAuth());
};
