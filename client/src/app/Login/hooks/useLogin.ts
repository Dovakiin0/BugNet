import axios from "axios";
import { useMutation } from "react-query";

async function loginUser(params: any) {
  const { data } = await axios.post("/api/v1/auth/", params);
  return data;
}

export const useLogin = () => {
  return useMutation(loginUser);
};
