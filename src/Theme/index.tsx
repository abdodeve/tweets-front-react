import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blueGrey, indigo } from "@mui/material/colors";

import typography from "./typography";

const theme = createTheme({
  palette: {
    background: {
      default: "#fff",
      paper: "#fff",
    },
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: indigo[500],
    },
    text: {
      primary: blueGrey[900],
      secondary: blueGrey[600],
    },
  },
  typography,
});

export default theme;
