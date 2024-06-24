// src/layouts/AnonymousLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";

const AnonymousLayout: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default AnonymousLayout;
