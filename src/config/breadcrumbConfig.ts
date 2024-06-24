import {
  ACCOUNT_EDIT_PROFILE,
  ACCOUNT_CHANGE_PASSWORD,
} from "../constants/routes";

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
  [ACCOUNT_CHANGE_PASSWORD]: {
    items: [
      { label: "Home", href: "/" },
      { label: "Account", href: "" },
      { label: "Change Password", href: "" },
    ],
    heading: "Change Password",
  },
};
