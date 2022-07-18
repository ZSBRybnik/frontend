import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    background: string;
    color: string;
    loader: string;
    accent: string;
    hover: string;
    active: string;
  }
}
