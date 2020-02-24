import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import MuiTheme from "../styles/muiTheme";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Footer from "../components/Footer";
import Header from "../components/Header";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#fafafa",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  header: {
    margin: "40px 0"
  },
  divider: {
    margin: "40px 0"
  }
}));

const Layout = props => {
  const classes = useStyles();

  return (
    <CssBaseline>
      <ThemeProvider theme={MuiTheme}>
        <Container className={classes.root}>
          <Box mb={3}>
            <Header />
          </Box>
          <div id="main">{props.children}</div>
          <Box my={3}>
            <Divider className={classes.divider} />
          </Box>
          <Footer />
        </Container>
      </ThemeProvider>
    </CssBaseline>
  );
};

export default Layout;
