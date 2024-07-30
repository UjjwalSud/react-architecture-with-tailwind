import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useDocumentTitle from "../hooks/useDocumentTitle";

interface AnonymousLayoutProps {
  pageTitle: string;
  pageHeading: string;
  children: ReactNode;
}

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
