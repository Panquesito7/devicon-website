import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#60be86",
    },
    secondary: {
      main: "#6069be",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
