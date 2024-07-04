// src/layouts/AuthenticatedLayout.tsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/sidebar";
import { breadcrumbConfig } from "../../config/breadcrumbConfig";
import Breadcrumb from "../components/breadCrumb";
import { ToastContainer } from "react-toastify";

const AuthenticatedLayout: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const breadcrumbData = breadcrumbConfig[currentPath] || {
    items: [],
    heading: "",
  };
  return (
    <div className="flex">
      <ToastContainer />
      <Sidebar />
      <div className="flex-1 flex flex-col sm:ml-64">
        <div className="bg-white shadow-md p-4 flex justify-between">
          <div className="flex items-center">
            <button className="mr-4">Menu</button>
            <span>Home</span>
            <span className="ml-4">Contact</span>
          </div>
        </div>

        <Breadcrumb
          items={breadcrumbData.items}
          heading={breadcrumbData.heading}
        />

        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
