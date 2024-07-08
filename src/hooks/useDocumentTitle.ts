import { useEffect } from "react";
import { appConfig } from "../config/appConfig";

const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = appConfig.WEBSITE_NAME + " : " + title;
  }, [title]);
};

export default useDocumentTitle;
