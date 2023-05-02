interface IColors {
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

export const theme: IColors = {
  color: {
    borderAdvantage: "rgba(0, 0, 0, 0.2)",
    primary: "#f5f5f5",
    primaryLight: "#FFFFFF",
    primaryDark: "rgb(152, 152, 152)",
    secondary: "#0f46a0",
    secondaryDark: "black",
    buttonShadow: "#B7B7B7",
    boxShadow: "rgba(0, 0, 0, 0.04)",
    selectShadow:
      "-1px 1px 2px rgba(67, 70, 74, 0), -2px 2px 5px rgba(67, 86, 100, 0.1)",
    error: "#d62828",
  },
};
