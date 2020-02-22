import React from "react";
import styled from "@emotion/styled";
import { Global } from "@emotion/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { globalStyles } from "../styles/globalStyles.js";

let theme = createMuiTheme({
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
      fontWeight: 100
    }
  }
});

theme = responsiveFontSizes(theme);

const Root = styled.div`
  margin-bottom: 25px;
`;

const HeaderContainer = styled.div`
  margin: 40px 0;
`;

const DividerContainer = styled.div`
  margin: 40px 0;
`;

const Layout = props => {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <Container>
          <HeaderContainer>
            <Header />
          </HeaderContainer>
          <div id="main">{props.children}</div>
          <DividerContainer>
            <Divider variant="middle" />
          </DividerContainer>
          <Footer />
          <Global styles={globalStyles} />
        </Container>
      </Root>
    </ThemeProvider>
  );
};

export default Layout;
