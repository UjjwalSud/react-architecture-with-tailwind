import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store';
import { authProtectedFlattenRoutes, publicProtectedFlattenRoutes } from '.';
import AuthenticatedLayout from '../layouts/AuthenticatedLayout';
import AuthLayout from '../layouts/AuthLayout';
import AnonymousLayout from '../layouts/AnonymousLayout';

const AllRoutes = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const token = useSelector((state: RootState) => state.auth.token);
  return (
    <Routes>
      {/* Public Routes */}
      {publicProtectedFlattenRoutes.map((route, idx) => (
        <Route
          key={idx}
          path={route.path}
          element={
            <AnonymousLayout pageTitle={route.name!} pageHeading={route.name!}>
              {route.element}
            </AnonymousLayout>
          }
        />
      ))}

      {/* Authenticated Routes */}
      {authProtectedFlattenRoutes.map((route, idx) => (
        <Route
          key={idx}
          path={route.path}
          element={
            isAuthenticated ? (
              
              <AuthenticatedLayout pageTitle={route.name!} pageHeading={route.name!}>
                
                {route.element}
              </AuthenticatedLayout>
            ) : (
              <Navigate
                to={{
                  pathname: '/auth/login',
                  search: `?next=${route.path}`,
                }}
              />
            )
          }
        />
      ))}
    </Routes>
  );
};

export default AllRoutes;
