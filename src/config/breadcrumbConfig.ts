import { ACCOUNT_EDIT_PROFILE } from "../constants/routes";

export interface IBreadcrumbItem {
  label: string;
  href: string;
}

export interface BreadcrumbData {
  items: IBreadcrumbItem[];
  heading: string;
}

export const breadcrumbConfig: { [key: string]: BreadcrumbData } = {
  [ACCOUNT_EDIT_PROFILE]: {
    items: [
      { label: "Home", href: "/" },
      { label: "Account", href: "" },
      { label: "Edit Profile", href: "" },
    ],
    heading: "Edit Profile",
  },
};
