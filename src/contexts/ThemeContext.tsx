import React from "react";

export type ThemeMode = "light" | "dark";

export interface ThemeContextProps {
  mode: ThemeMode;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  mode: "light",
  toggleTheme: () => {},
});
