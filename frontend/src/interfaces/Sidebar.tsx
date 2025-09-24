import type { ReactNode } from "react";

export interface CreateContextType {
  expanded: boolean;
}

export interface SideBarProps {
  children: ReactNode;
}

export interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
}
