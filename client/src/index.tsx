import { ThemeProvider } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./i18n/i18n";
import store from "./store/store";
import "./styles/global.css";
import { theme } from "./ui/colors-config";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
