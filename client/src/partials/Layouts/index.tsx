import { Flex } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useStore";
import { useAuth } from "../Routes/hooks/useAuth";
import Navbar from "./Navbar";
import { shallow } from "zustand/shallow";
import Loader from "../Loader";
import { useQuery } from "../../helper/util";

type Props = {};

function Layout({ }: Props) {
  const setUser = useAuthStore((state) => state.setUser, shallow);
  const navigate = useNavigate();
  const { data, isLoading, isError, isSuccess, error } = useAuth();

  const query = useQuery();
  const token = query.get("token");
  const fromURL = query.get("from");
  if (token) {
    localStorage.setItem("token", token);
    navigate(fromURL || "/");
  }

  if (isError) {
    console.log((error as any).response.message);
  }

  if (isSuccess) {
    if (data?.status === 401) {
      localStorage.removeItem("token");
      navigate("/login");
    } else {
      setUser(data);
    }
  }
  return isLoading ? <Loader /> : <Navbar />;
}

export default Layout;
