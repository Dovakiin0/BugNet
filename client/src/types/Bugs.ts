import { ProjectProps } from "./Project";

export interface BugsProps {
  id: string;
  title: string;
  projectId: string;
  project: ProjectProps;
  author: string;
  createdAt: string;
  priority: number;
}
