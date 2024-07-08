import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { localStorageHelper } from "../utils/localStorage"; // Import your local storage helper
import { localStorageKeys } from "../constants/localStorageKeys";
import { systemRoutes } from "../constants/systemRoutes";

const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorageHelper.getItem(localStorageKeys.JWT_TOKEN);
    if (!token) {
      navigate(systemRoutes.LOGIN);
    } else {
      setLoading(false);
    }
  }, [navigate]);

  return { loading };
};

export default useAuth;
