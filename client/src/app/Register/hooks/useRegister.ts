import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

async function registerUser(params: any) {
  const { data } = await axios.post(
    "http://localhost:3030/api/v1/auth/register",
    params
  );
  return data;
}

export const useRegister = () => {
  return useMutation(registerUser);
};
