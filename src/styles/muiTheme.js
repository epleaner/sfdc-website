import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const MuiTheme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      h1: {
        fontWeight: 100,
        fontSize: "5.5rem"
      },
      h2: {
        fontSize: "2.5rem",
        fontWeight: 100
      },
      h3: {
        fontSize: "2rem",
        fontWeight: 100
      }
    }
  })
);

export default MuiTheme;
