import { FaHome, FaUser, FaBug, FaList } from "react-icons/fa";

type SidebarRoute = {
  BarIcon: React.FC;
  path: string;
  name: string;
  access: string[];
};

export const sidebarRoutes: SidebarRoute[] = [
  { BarIcon: FaHome, name: "Home", path: "/", access: ["admin", "user"] },
  {
    BarIcon: FaHome,
    name: "Projects",
    path: "/projects",
    access: ["admin", "user"],
  },
  { BarIcon: FaUser, name: "Users", path: "/users", access: ["admin"] },
  {
    BarIcon: FaBug,
    name: "Create Bug",
    path: "/create-bug",
    access: ["admin", "user"],
  },
  {
    BarIcon: FaList,
    name: "List Bugs",
    path: "/list-bugs",
    access: ["admin", "user"],
  },
];
