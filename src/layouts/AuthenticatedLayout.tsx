import { ToastContainer } from "react-toastify";
import Sidebar from "../components/Sidebar";
import Breadcrumb from "../components/BreadCrumb";
import { breadcrumbConfig } from "../config/BreadcrumbConfig";
import { useLocation } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { ReactNode, Suspense } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
const loading = () => <div />
interface AuthenticatedLayoutProps {
  pageTitle: string;
  pageHeading: string;
  children: ReactNode;
}

const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = (props) => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const token = useSelector((state: RootState) => state.auth.token);
  const location = useLocation();
  const currentPath = location.pathname;

  const breadcrumbData = breadcrumbConfig[currentPath] || {
    items: [],
    heading: props.pageHeading,
  };

  useDocumentTitle(props.pageTitle);

  return (
     <Suspense fallback={loading()}>
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
        <div className="p-4">{props.children}</div>
      </div>
    </div>
    </Suspense>
  );
};

export default AuthenticatedLayout;
