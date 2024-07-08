import { systemRoutes } from "../constants/systemRoutes";

export interface IBreadcrumbItem {
  label: string;
  href: string;
}

export interface BreadcrumbData {
  items: IBreadcrumbItem[];
  heading: string;
}

export const breadcrumbConfig: { [key: string]: BreadcrumbData } = {
  [systemRoutes.ACCOUNT_EDIT_PROFILE]: {
    items: [
      { label: "Dashboard", href: systemRoutes.DASHBOARD },
      { label: "Account", href: "" },
      { label: "Edit Profile", href: "" },
    ],
    heading: "Edit Profile",
  },
  [systemRoutes.DASHBOARD]: {
    items: [{ label: "Dashboard", href: "" }],
    heading: "Dashboard",
  },
};
