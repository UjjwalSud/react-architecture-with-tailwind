import { ReactNode, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { AppConfig } from "../config/AppConfig";

interface AuthLayoutProps {
  pageTitle: string;
  pageHeading: string;
  children: ReactNode;
}

const AuthLayout = ({ pageTitle, children, pageHeading }: AuthLayoutProps) => {
  useEffect(() => {
    document.title = AppConfig.WEBSITE_NAME + " : " + pageTitle;
  }, [pageTitle]);
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <ToastContainer />
            <div>
              <h1 className="text-2xl font-semibold">{pageHeading} </h1>
            </div>
            <div className="max-w-md mx-auto">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
