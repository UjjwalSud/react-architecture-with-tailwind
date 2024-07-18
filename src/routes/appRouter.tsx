import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import EditProfile from "../pages/my-account/EditProfile";
import AnonymousLayout from "../layouts/AnonymousLayout";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import { systemRoutes } from "../constants/systemRoutes";
import Error404 from "../pages/error/Error404";
import AgGridExample from "../pages/examples/AgGridExample";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AnonymousLayout />}>
          <Route path={systemRoutes.LOGIN} element={<Login />} />
        </Route>
        <Route element={<AuthenticatedLayout />}>
          <Route
            path={systemRoutes.ACCOUNT_EDIT_PROFILE}
            element={<EditProfile />}
          />
          <Route path={systemRoutes.DASHBOARD} element={<Dashboard />} />
          <Route
            path={systemRoutes.EXAMPLES_AG_GRID}
            element={<AgGridExample />}
          />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
