import React from "react";
import styled from "@emotion/styled";
import { Global } from "@emotion/core";
import { ThemeProvider } from "@material-ui/core/styles";
import MuiTheme from "../styles/muiTheme";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { globalStyles } from "../styles/globalStyles.js";

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
    <ThemeProvider theme={MuiTheme}>
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
