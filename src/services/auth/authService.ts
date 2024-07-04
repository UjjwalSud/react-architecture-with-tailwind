import { AUTH_LOGIN } from "../../constants/apiEndPoints";
import { postAPI } from "../../utils/httpRequest";
import { authRequest } from "../../interfaces/requests/auth/authrequest";
import { authResponse } from "../../interfaces/responses/auth/authResponse";
import { localStorageHelper } from "../../utils/localStorage";
import { LocalStorageKeys } from "../../constants/localStorageKeys";
import { showErrorMessage } from "../../utils/notification";

const authService = {
  login: (data: authRequest): void => {
    postAPI(
      AUTH_LOGIN,
      data,
      (responseData: authResponse, status) => {
        localStorageHelper.setItem(
          LocalStorageKeys.JwtToken,
          responseData.jwtToken
        );
      },
      (error, status) => {
        showErrorMessage(error);
      }
    );
  },
};

export default authService;
