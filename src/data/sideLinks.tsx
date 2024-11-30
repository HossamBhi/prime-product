export interface NavLink {
  title: string;
  label?: string;
  href: string;
}

export interface SideLink extends NavLink {
  sub?: NavLink[];
}

export const sideLinks: SideLink[] = [
  {
    title: "sidebar.dashboard",
    label: "",
    href: "/",
  },
];
