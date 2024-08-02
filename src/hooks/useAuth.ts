// src/hooks/useAuth.ts
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store';

const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    if (!token) {
      navigate('/login', { state: { from: location } });
    }
    setLoading(false);
  }, [token, navigate, location]);

  return { loading };
};

export default useAuth;
