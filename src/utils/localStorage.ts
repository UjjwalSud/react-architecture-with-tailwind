import { localStorageKeys } from "../constants/localStorageKeys";

//how to use : localStorageHelper.setItem(LocalStorageKeys.JwtToken, token);
export const localStorageHelper = {
  setItem: <T>(key: localStorageKeys, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  //how to use : localStorageHelper.getItem<string>(LocalStorageKeys.JwtToken);
  getItem: <T>(key: localStorageKeys): T | null => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },

  removeItem: (key: localStorageKeys): void => {
    localStorage.removeItem(key);
  },

  clearAll: (): void => {
    localStorage.clear();
  },
};
