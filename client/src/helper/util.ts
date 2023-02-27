import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export function useMatchPath(path: string) {
  const location = useLocation();
  return location.pathname === path;
}

export function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}
