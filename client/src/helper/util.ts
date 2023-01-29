import { useLocation } from "react-router-dom";

export function useMatchPath(path: string) {
  const location = useLocation();
  return location.pathname === path;
}
