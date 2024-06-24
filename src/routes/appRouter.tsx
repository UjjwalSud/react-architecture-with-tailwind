// src/routes/AppRouter.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../auth/login";
//import ForgotPassword from "../auth/ForgotPassword";
import EditProfile from "../my-account/editProfile";
import ChangePassword from "../my-account/changePassword";
import AnonymousLayout from "../layouts/anonymousLayout";
import AuthenticatedLayout from "../layouts/authenticatedLayout";

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
