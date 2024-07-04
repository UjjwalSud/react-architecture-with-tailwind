// src/routes/AppRouter.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/login";
import EditProfile from "../pages/my-account/editProfile";
import AnonymousLayout from "../pages/layouts/anonymousLayout";
import AuthenticatedLayout from "../pages/layouts/authenticatedLayout";
import Dashboard from "../pages/dashboard/dashboard";
import { ACCOUNT_EDIT_PROFILE, DASHBOARD, LOGIN } from "../constants/routes";
import NotFoundPage from "../pages/notFoundPage";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AnonymousLayout />}>
          <Route path={LOGIN} element={<Login />} />
        </Route>
        <Route element={<AuthenticatedLayout />}>
          <Route path={ACCOUNT_EDIT_PROFILE} element={<EditProfile />} />
          <Route path={DASHBOARD} element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
