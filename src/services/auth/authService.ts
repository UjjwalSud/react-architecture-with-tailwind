import { apiEndpoints } from "../../constants/apiEndPoints";
import { postAPI } from "../../utils/httpRequest";
import { authRequest } from "../../interfaces/requests/auth/authrequest";
import { authResponse } from "../../interfaces/responses/auth/authResponse";
import { localStorageHelper } from "../../utils/localStorage";
import { localStorageKeys } from "../../constants/localStorageKeys";
import { showErrorMessage } from "../../utils/notification";

const authService = {
  login: (data: authRequest): Promise<boolean> => {
    return new Promise((resolve) => {
      postAPI(
        apiEndpoints.AUTH_LOGIN,
        data,
        (responseData: authResponse, status) => {
          localStorageHelper.setItem(
            localStorageKeys.JWT_TOKEN,
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
export default authService;
