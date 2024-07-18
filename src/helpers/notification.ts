import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showSuccessMessage = (message: string) => {
  toast.success(message);
};

export const showInfoMessage = (message: string) => {
  toast.info(message);
};

export const showErrorMessage = (message: string) => {
  toast.error(message);
};

export { ToastContainer };
