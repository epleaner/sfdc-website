import React from "react";
import styled from "@emotion/styled";
import { makeStyles } from "@material-ui/core/styles";
import { Global } from "@emotion/core";
import { ThemeProvider } from "@material-ui/core/styles";
import MuiTheme from "../styles/muiTheme";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { globalStyles } from "../styles/globalStyles.js";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#fafafa"
  }
}));

const HeaderContainer = styled.div`
  margin: 40px 0;
`;

const DividerContainer = styled.div`
  margin: 40px 0;
`;

const Layout = props => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={MuiTheme}>
      <Container className={classes.root}>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <div id="main">{props.children}</div>
        <DividerContainer>
          <Divider />
        </DividerContainer>
        <Footer />
        <Global styles={globalStyles} />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
