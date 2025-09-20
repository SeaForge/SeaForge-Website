import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    accent: Palette["primary"];
  }
  interface PaletteOptions {
    accent?: PaletteOptions["primary"];
  }
}

// Extend the Button color options to include accent
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    accent: true;
  }
}

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    text: {
      primary: "#002e2e",
    },
    background: {
      default: "#f5f5f5",
    },
    primary: {
      main: "#00435c",
    },
    secondary: {
      main: "#b8b5c0",
    },
    accent: {
      main: "#efe51f",
      light: "#f2e94e",
      dark: "#d6c70a",
      contrastText: "#002e2e",
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Arial', sans-serif`,
    h1: {
      fontFamily: `'Montserrat', 'Roboto', sans-serif`,
      fontWeight: 600,
    },
    h2: {
      fontFamily: `'Montserrat', 'Roboto', sans-serif`,
      fontWeight: 600,
    },
    h3: {
      fontFamily: `'Montserrat', 'Roboto', sans-serif`,
      fontWeight: 600,
    },
    h4: {
      fontFamily: `'Montserrat', 'Roboto', sans-serif`,
      fontWeight: 600,
    },
    h5: {
      fontFamily: `'Montserrat', 'Roboto', sans-serif`,
      fontWeight: 600,
    },
    h6: {
      fontFamily: `'Montserrat', 'Roboto', sans-serif`,
      fontWeight: 600,
    },
    button: {
      fontFamily: `'Montserrat', 'Roboto', sans-serif`,
      fontWeight: 600,
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "#d1ffff",
    },
    background: {
      default: "#0a0a0a",
    },
    primary: {
      main: "#a3e7ff",
    },
    secondary: {
      main: "#423f4a",
    },
    accent: {
      main: "#e0d610",
      light: "#e6de3a",
      dark: "#c4b70d",
      contrastText: "#0a0a0a",
    },
  },
  typography: lightTheme.typography,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});
