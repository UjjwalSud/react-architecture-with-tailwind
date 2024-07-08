import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const AnonymousLayout: React.FC = () => {
  return (
    <>
      <ToastContainer />
      <Outlet />
    </>
  );
};

export default AnonymousLayout;
