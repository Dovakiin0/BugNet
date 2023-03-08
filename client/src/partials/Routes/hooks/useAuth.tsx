import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";

async function getAuth() {
  try {
    const { data } = await axios.get("/api/v1/auth/@me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return data;
  } catch (error) {
    return (error as AxiosError).response;
  }
}

export const useAuth = () => {
  return useQuery(["auth"], () => getAuth());
};
