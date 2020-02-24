import * as React from "react";
import Menu from "material-ui-popup-state/HoverMenu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {
  usePopupState,
  bindHover,
  bindMenu
} from "material-ui-popup-state/hooks";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const useStyles = makeStyles({
  active: {
    borderBottom: "thin solid"
  }
});

const NoStyleLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  font-weight: 100;
`;

const NoStyleLinkDarkSmall = styled(NoStyleLink)`
  font-size: 0.8em;
  color: black;
`;

const StyledButton = styled(Button)`
  margin-right: theme.spacing(1);
  font-weight: 100;
  color: #fafafa;
`;

const MenuPopupState = props => {
  const { mainText, links, pathname } = props;
  const classes = useStyles();
  const createTextLink = text =>
    `/${text
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s\s*/g, "-")}`;

  const popupState = usePopupState({
    variant: "popover",
    popupId: "popupMenu"
  });

  return (
    <React.Fragment>
      <StyledButton>
        <NoStyleLink
          className={`${classes.link} ${pathname === createTextLink(mainText) &&
            classes.active}`}
          {...bindHover(popupState)}
          to={createTextLink(mainText)}
        >
          {mainText}
        </NoStyleLink>
      </StyledButton>
      <Menu
        {...bindMenu(popupState)}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        {links.map((text, index) => {
          const linkText = `${createTextLink(mainText)}${createTextLink(text)}`;

          return (
            <MenuItem key={index} onClick={popupState.close}>
              <NoStyleLinkDarkSmall
                to={linkText}
                className={`${classes.link} ${pathname === linkText &&
                  classes.active}`}
              >
                {text}
              </NoStyleLinkDarkSmall>
            </MenuItem>
          );
        })}
      </Menu>
    </React.Fragment>
  );
};

export default MenuPopupState;
