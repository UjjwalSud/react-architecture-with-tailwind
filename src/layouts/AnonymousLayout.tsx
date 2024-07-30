import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useDocumentTitle from "../hooks/useDocumentTitle";

interface AnonymousLayoutProps {
  pageTitle: string;
  pageHeading: string;
  children: ReactNode;
}

/*
const AuthLayout: React.FC<AuthLayoutProps> = (props) => {
  useEffect(() => {
    document.title = AppConfig.WEBSITE_NAME + " : " + props.pageTitle;
  }, [props.pageTitle]);
*/
const AnonymousLayout: React.FC<AnonymousLayoutProps> = (props) => {
  useDocumentTitle(props.pageTitle);
  return (
    <>
      <ToastContainer />
      <Outlet />
      {props.children}
    </>
  );
};

export default AnonymousLayout;
