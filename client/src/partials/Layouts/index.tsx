import { Flex } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useStore";
import { useAuth } from "../Routes/hooks/useAuth";
import Navbar from "./Navbar";
import { shallow } from "zustand/shallow";
import Loader from "../Loader";

type Props = {};

function Layout({ }: Props) {
  const setUser = useAuthStore((state) => state.setUser, shallow);
  const navigate = useNavigate();
  const { data, isLoading, isError, isSuccess, error } = useAuth();

  if (isError) {
    console.log((error as any).response.message);
  }

  if (isSuccess) {
    if (data?.status === 401) {
      navigate("/login");
    } else {
      setUser(data);
    }
  }
  return isLoading ? <Loader /> : <Navbar />;
}

export default Layout;
