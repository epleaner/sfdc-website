import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Grid from "@material-ui/core/Grid";
import MaterialMenu from "./MaterialMenu";

const HeaderContainer = styled.header`
  background: ${props => props.theme.colors.background};
`;

const Catchphrase = styled.h3`
  font-size: 5.5em;
  font-weight: 100;
`;

const SecondaryPhrase = styled.h4`
  font-size: 2.5em;
  font-weight: 100;
`;

const SmallDescription = styled.p`
  font-size: 1em;
`;

const Header = props => {
  const { onMenuClick } = props;
  return (
    <HeaderContainer>
      <MaterialMenu onMenuClick={onMenuClick} />
      <Grid
        css={css`
          margin: 24px 0px;
        `}
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        <Grid
          sm={12}
          md={9}
          item
          container
          direction="row"
          justify="space-between"
          spacing={5}
          css={css``}
        >
          <Grid item xs={12}>
            <Catchphrase>Meditate with us.</Catchphrase>
          </Grid>
          <Grid item xs={12}>
            <SecondaryPhrase>
              The SF Dharma Collective is a community-led sangha.
            </SecondaryPhrase>
          </Grid>
          <Grid item>
            <SmallDescription>
              All classes and sits are open to all and no registration is
              necessary. We are supported by your generosity (dana). No one is
              ever turned away for lack of funds. SFDC is wheelchair accessible
              and has two accessible bathroom stalls. We use fragrance-free
              cleaning products.
            </SmallDescription>
          </Grid>
        </Grid>
      </Grid>
    </HeaderContainer>
  );
};

export default Header;
