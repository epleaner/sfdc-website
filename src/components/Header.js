import React from "react";
import styled from "@emotion/styled";
import MaterialMenu from "./MaterialMenu";
import { Location } from "@reach/router";

const HeaderContainer = styled.header`
  background: ${props => props.theme.colors.background};
`;

const Header = props => {
  return (
    <HeaderContainer>
      <Location>
        {locationProps => <MaterialMenu {...locationProps} />}
      </Location>
    </HeaderContainer>
  );
};

export default Header;
