import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { localStorageHelper } from "../utils/localStorage"; // Import your local storage helper
import { localStorageKeys } from "../constants/localStorageKeys";
import { systemRoutes } from "../constants/systemRoutes";

const useAuth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorageHelper.getItem(localStorageKeys.JWT_TOKEN);
    if (!token) {
      navigate(systemRoutes.LOGIN); // Redirect to login if no token is found
    }
  }, [navigate]);
};

export default useAuth;
