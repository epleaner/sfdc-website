import * as React from 'react';
import Menu from 'material-ui-popup-state/HoverMenu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {
  usePopupState,
  bindHover,
  bindMenu,
} from 'material-ui-popup-state/hooks';
import { Link } from 'gatsby';

const useStyles = makeStyles((theme) => ({
  active: {
    borderBottom: `1px solid ${theme.palette.primaryBlue0}`,
    borderBottomRightRadius: '0px',
    borderBottomLeftRadius: '0px',
  },
  link: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: 'black',
    fontWeight: 100,
  },
  small: {
    fontSize: '0.8em',
  },
  button: {
    marginRight: theme.spacing(1),
    fontWeight: 100,
  },
}));

const MenuPopupState = ({ mainText, links, currentPath }) => {
  const classes = useStyles();
  const createTextLink = (text) =>
    `/${text
      .toLowerCase()
      .replace(/[^\w\s\-]/gi, '')
      .replace(/\s\s*/g, '-')}`;

  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'popupMenu',
  });

  return (
    <>
      <Link
        className={`${classes.link}`}
        {...bindHover(popupState)}
        to={createTextLink(mainText)}>
        <Button
          className={`${classes.button} ${currentPath ===
            createTextLink(mainText) && classes.active}`}>
          {mainText}
        </Button>
      </Link>
      <Menu
        {...bindMenu(popupState)}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}>
        {links.map(({ name, path }) => {
          return (
            <Link key={name} to={path} className={`${classes.link}`}>
              <MenuItem onClick={popupState.close}>
                <span
                  className={`${classes.small} ${currentPath === path &&
                    classes.active}`}>
                  {name}
                </span>
              </MenuItem>
            </Link>
          );
        })}
      </Menu>
    </>
  );
};

export default MenuPopupState;
