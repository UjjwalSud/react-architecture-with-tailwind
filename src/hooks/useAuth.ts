import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { localStorageHelper } from "../helpers/localStorage"; // Import your local storage helper
import { LocalStorageKeys } from "../constants/localStorageKeys";
import { systemRoutes } from "../constants/systemRoutes";

const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorageHelper.getItem(LocalStorageKeys.JWT_TOKEN);
    if (!token) {
      navigate(systemRoutes.LOGIN, { state: { from: location } });
    } else {
      setLoading(false);
    }
  }, [navigate]);

  return { loading };
};

export default useAuth;
