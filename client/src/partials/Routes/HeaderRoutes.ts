import { FaHome, FaUser, FaBug, FaList } from "react-icons/fa";

type HeaderRoute = {
  path: string;
  name: string;
  access: string[];
};

export const HeaderRoutes: HeaderRoute[] = [
  {
    name: "Home",
    path: "/",
    access: ["admin", "user"],
  },
  {
    name: "Kanban",
    path: "/kanban",
    access: ["admin", "user"],
  },
];
