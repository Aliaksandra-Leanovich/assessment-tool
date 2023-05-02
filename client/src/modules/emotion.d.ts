import "@emotion/react";

import { Theme as EmotionTheme } from "./styles/theme";

declare module "@emotion/react" {
  export interface Theme extends EmotionTheme {}
  export interface Theme {
    color: {
      borderAdvantage: string;
      primary: string;
      primaryLight: string;
      primaryDark: string;
      secondary: string;
      secondaryDark: string;
      buttonShadow: string;
      selectShadow: string;
      boxShadow: string;
      error: string;
    };
  }
}
