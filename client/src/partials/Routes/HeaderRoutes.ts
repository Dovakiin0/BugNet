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
    name: "Projects",
    path: "/projects",
    access: ["admin", "user"],
  },
  { name: "Users", path: "/users", access: ["admin"] },
  {
    name: "List Bugs",
    path: "/bugs",
    access: ["admin", "user"],
  },
  {
    name: "Kanban",
    path: "/kanban",
    access: ["admin", "user"],
  },
];
