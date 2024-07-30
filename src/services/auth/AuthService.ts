import { ApiEndPoints } from "../../constants/apiEndPoints";
import { postAPI } from "../../helpers/httpRequest";
import { AuthRequest } from "../../interfaces/requests/auth/AuthRequest";
import { AuthResponse } from "../../interfaces/responses/auth/AuthResponse";
import { localStorageHelper } from "../../helpers/localStorage";
import { LocalStorageKeys } from "../../constants/localStorageKeys";
import { showErrorMessage } from "../../helpers/notification";

const AuthService = {
  login: (data: AuthRequest): Promise<boolean> => {
    return new Promise((resolve) => {
      postAPI(
        ApiEndPoints.AUTH_LOGIN,
        data,
        (responseData: AuthResponse, status) => {
          localStorageHelper.setItem(
            LocalStorageKeys.JWT_TOKEN,
            responseData.jwtToken
          );
          resolve(true);
        },
        (error) => {
          showErrorMessage(error);
          resolve(false);
        }
      );
    });
  },
};
export default AuthService;
