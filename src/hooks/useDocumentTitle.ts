// src/hooks/useDocumentTitle.ts
import { useEffect } from "react";
import { WEBSITE_NAME } from "../config/appConfig";

const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = WEBSITE_NAME + " : " + title;
  }, [title]);
};

export default useDocumentTitle;
