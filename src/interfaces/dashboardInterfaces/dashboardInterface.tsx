import { ReactNode } from "react";

export interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

export interface UserNavigationItem {
  name: string;
  href: string;
}

export interface User {
  name: string;
  email: string;
  imageUrl: string;
}

export interface DisclosureProps {
  open?: boolean;
}

export interface DashboardLayoutProps {
  children: ReactNode;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}
