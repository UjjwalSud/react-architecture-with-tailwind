import React, { ReactNode, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useDocumentTitle from "../hooks/useDocumentTitle";
const loading = () => <div />
interface AnonymousLayoutProps {
  pageTitle: string;
  pageHeading: string;
  children: ReactNode;
}

const AnonymousLayout: React.FC<AnonymousLayoutProps> = (props) => {
  useDocumentTitle(props.pageTitle);
  return (
    <>
     <Suspense fallback={loading()}>
      <ToastContainer />
      <Outlet />
      {props.children}
      </Suspense>
    </>
  );
};

export default AnonymousLayout;
