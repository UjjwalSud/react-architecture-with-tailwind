import { useEffect } from "react";
import { AppConfig } from "../config/AppConfig";

const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = AppConfig.WEBSITE_NAME + " : " + title;
  }, [title]);
};

export default useDocumentTitle;
