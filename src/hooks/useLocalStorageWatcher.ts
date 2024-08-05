// src/hooks/useLocalStorageWatcher.ts
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/AuthSlice';

function useLocalStorageWatcher() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'logout') {
        dispatch(logout());
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [dispatch]);
}

export default useLocalStorageWatcher;
