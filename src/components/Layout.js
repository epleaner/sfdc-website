import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Global } from "@emotion/core";
import Container from "@material-ui/core/Container";
import Footer from "../components/Footer";
import Divider from "@material-ui/core/Divider";
import Header from "../components/Header";

import { globalStyles } from "../styles/globalStyles.js";

const Root = styled.div`
  font-family: ${props => props.theme.fonts.body};
  background: ${props => props.theme.colors.background};
  margin-bottom: 25px;
`;

const DividerContainer = styled.div`
  margin: 40px 0;
`;

const Layout = props => {
  const { width } = props;
  return (
    <Root>
      <Container>
        <Header />
        <div id="main">{props.children}</div>
        <DividerContainer>
          <Divider variant="middle" />
        </DividerContainer>
        <Footer />
        <Global styles={globalStyles} />
      </Container>
    </Root>
  );
};

export default Layout;
