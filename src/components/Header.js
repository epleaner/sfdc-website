import React from "react";
import styled from "@emotion/styled";
import MaterialMenu from "./MaterialMenu";

const HeaderContainer = styled.header`
  background: ${props => props.theme.colors.background};
`;

const Header = props => {
  const { onMenuClick } = props;
  return (
    <HeaderContainer>
      <MaterialMenu onMenuClick={onMenuClick} />
    </HeaderContainer>
  );
};

export default Header;
