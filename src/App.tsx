// src/App.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { RootState } from "./redux/Store";
import { setTokenFromLocalStorage, logout } from "./redux/AuthSlice";
import useLocalStorageWatcher from "./hooks/useLocalStorageWatcher";
import AllRoutes from "./routes/Routes";

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);

  // Use the hook to listen for logout events
  useLocalStorageWatcher();

  useEffect(() => {
    if (token) {
      dispatch(setTokenFromLocalStorage(token));
    }
  }, [dispatch, token]);

  // Call this function when you need to logout
  const handleLogout = () => {
    dispatch(logout());
    // Set a key in localStorage to trigger the event in other tabs
    localStorage.setItem('logout', new Date().toISOString());
    // Optionally: Clear the logout key after a short delay to avoid triggering multiple events
    setTimeout(() => localStorage.removeItem('logout'), 1000);
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <AllRoutes />
      {/* Add logout button or any other component that triggers logout */}
      <button onClick={handleLogout}>Logout</button>
    </React.Fragment>
  );
};

export default App;
