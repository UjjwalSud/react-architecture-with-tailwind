// src/routes/AppRouter.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/login";
//import ForgotPassword from "../auth/ForgotPassword";
import EditProfile from "../pages/my-account/editProfile";
import ChangePassword from "../pages/my-account/changePassword";
import AnonymousLayout from "../pages/layouts/anonymousLayout";
import AuthenticatedLayout from "../pages/layouts/authenticatedLayout";

import {
  ACCOUNT_EDIT_PROFILE,
  LOGIN,
  ACCOUNT_CHANGE_PASSWORD,
} from "../constants/routes";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AnonymousLayout />}>
          <Route path={LOGIN} element={<Login />} />
        </Route>
        <Route element={<AuthenticatedLayout />}>
          <Route path={ACCOUNT_EDIT_PROFILE} element={<EditProfile />} />
          <Route path={ACCOUNT_CHANGE_PASSWORD} element={<ChangePassword />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
