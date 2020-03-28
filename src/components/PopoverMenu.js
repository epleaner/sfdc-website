import * as React from 'react';
import Menu from 'material-ui-popup-state/HoverMenu';
import MenuItem from '@material-ui/core/MenuItem';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {
  usePopupState,
  bindHover,
  bindMenu,
} from 'material-ui-popup-state/hooks';
import {Link} from 'gatsby';

const useStyles = makeStyles((theme) => ({
  active: {
    borderBottom: `thin solid ${theme.palette.primaryBlue0}`,
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
    color: theme.palette.backgroundColor,
  },
}));

const MenuPopupState = (props) => {
  const {mainText, links, currentPath} = props;
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
    <React.Fragment>
      <Button className={classes.button}>
        <Link
          className={`${classes.link} ${currentPath ===
            createTextLink(mainText) && classes.active}`}
          {...bindHover(popupState)}
          to={createTextLink(mainText)}
        >
          {mainText}
        </Link>
      </Button>
      <Menu
        {...bindMenu(popupState)}
        getContentAnchorEl={null}
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        transformOrigin={{vertical: 'top', horizontal: 'center'}}
      >
        {links.map((text, index) => {
          const linkText = `${createTextLink(mainText)}${createTextLink(text)}`;

          return (
            <MenuItem key={index} onClick={popupState.close}>
              <Link
                to={linkText}
                className={`${classes.link} ${classes.small} ${currentPath ===
                  linkText && classes.active}`}
              >
                {text}
              </Link>
            </MenuItem>
          );
        })}
      </Menu>
    </React.Fragment>
  );
};

export default MenuPopupState;
