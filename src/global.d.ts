// src/react-app-env.d.ts
import * as React from "react";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    autoComplete?: string;
  }
}
