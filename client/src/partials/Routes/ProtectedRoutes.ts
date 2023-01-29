type ProtectedRoute = {
  path: string;
  name: string;
  access: string[];
};

export const protectedRoutes: ProtectedRoute[] = [
  { name: "Home", path: "/", access: ["admin", "user"] },
  { name: "Projects", path: "/projects", access: ["admin", "user"] },
  { name: "Users", path: "/users", access: ["admin"] },
  { name: "Create Bug", path: "/create-bug", access: ["admin", "user"] },
  { name: "List Bugs", path: "/list-bugs", access: ["admin", "user"] },
];
