import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Drawer from '@material-ui/core/Drawer';
import ExpandingMenu from './ExpandingMenu';
import {Link} from 'gatsby';

const useStyles = makeStyles({
  list: {
    width: '100vw',
    paddingTop: '50px',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    textTransform: 'uppercase',
  },
  closeButton: {
    position: 'absolute',
    top: '12px',
    right: '17px',
  },
  active: {
    borderBottom: 'thin solid #5ac8cd',
  },
});

const menuItems = [
  {name: 'Home', path: '/'},
  {name: 'Calendar', path: '/calendar'},
  {name: 'Donate', path: 'https://sfdharmacollective.org/donate'},
  {
    name: 'About Us',
    path: '/about-us',
    nested: [
      {name: 'Leadership', path: '/about-us/leadership'},
      {name: 'Contact', path: '/about-us/contact'},
    ],
  },
  {name: 'Teachers', path: '/teachers'},
  {name: 'Newsletter', path: '/newsletter'},
  {name: 'Volunteer', path: '/volunteer'},
  {
    name: 'Resources',
    path: '/resources',
    nested: [
      {name: 'From Our Friends', path: '/resources/from-our-friends'},
      {
        name: 'Local Centers',
        path: '/resources/local-sits-centers',
      },
      {name: 'Podcasts', path: '/resources/podcasts'},
      {
        name: 'Other Offerings',
        path: '/resources/other-offerings-sfdc',
      },
    ],
  },
];

const DrawerMenu = (props) => {
  const {toggleDrawerMenu, isOpen, currentPath} = props;

  const classes = useStyles();

  return (
    <Drawer anchor="right" open={isOpen} onClose={toggleDrawerMenu}>
      <Grid container className={classes.list} role="presentation">
        <IconButton
          className={classes.closeButton}
          edge="start"
          aria-label="close-menu"
          onClick={toggleDrawerMenu}
          onKeyDown={toggleDrawerMenu}
        >
          <CloseIcon />
        </IconButton>
        <Grid item xs={12} container justify="center">
          <List>
            {menuItems.map(({name, path, nested}) =>
              nested ? (
                <ExpandingMenu
                  key={name}
                  mainItem={{name, path}}
                  nestedItems={nested}
                  currentPath={currentPath}
                />
              ) : (
                <ListItem button key={name}>
                  <Typography
                    className={currentPath === path ? classes.active : ''}
                    variant="h6"
                    component="li"
                  >
                    {path.startsWith('/') ? (
                      <Link className={classes.link} to={path}>
                        {name}
                      </Link>
                    ) : (
                      <a className={classes.link} href={path}>
                        {name}
                      </a>
                    )}
                  </Typography>
                </ListItem>
              ),
            )}
          </List>
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default DrawerMenu;
