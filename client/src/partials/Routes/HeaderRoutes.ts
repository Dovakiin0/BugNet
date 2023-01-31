import { FaHome, FaUser, FaBug, FaList } from "react-icons/fa";

type HeaderRoute = {
  path: string;
  name: string;
  access: string[];
};

export const HeaderRoutes: HeaderRoute[] = [
  {
    name: "Projects",
    path: "/projects",
    access: ["admin", "user"],
  },
  { name: "Users", path: "/users", access: ["admin"] },
  {
    name: "Create Bug",
    path: "/bugs/create",
    access: ["admin", "user"],
  },
  {
    name: "List Bugs",
    path: "/bugs",
    access: ["admin", "user"],
  },
];
