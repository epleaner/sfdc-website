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
import DrawerMenuItem from './DrawerMenuItem';

const useStyles = makeStyles({
  list: {
    width: '100vw',
    paddingTop: '50px',
  },
  closeButton: {
    position: 'absolute',
    top: '12px',
    right: '17px',
  },
  nonExpandingItem: {
    height: '64px',
  },
});

const menuItems = [
  {name: 'Home', path: '/'},
  {
    name: 'About Us',
    path: '/about-us',
    nested: [
      {name: 'Teachers', path: '/teachers'},
      {name: 'Leadership', path: '/about-us/leadership'},
      {name: 'Contact', path: '/about-us/contact'},
    ],
  },
  {
    name: 'Calendar',
    path: '/calendar',
    nested: [
      {
        name: 'Upcoming Events',
        path: '/calendar/upcoming-events',
      },
    ],
  },
  {name: 'Donate', path: 'https://sfdharmacollective.org/donate'},
  {name: 'Volunteer', path: '/volunteer'},
  {
    name: 'Resources',
    path: '/resources',
    nested: [
      {name: 'Newsletter', path: '/newsletter'},
      {name: 'From Our Friends', path: '/resources/from-our-friends'},
      {
        name: 'Local Centers',
        path: '/resources/local-centers',
      },
      {name: 'Podcasts', path: '/resources/podcasts'},
      {
        name: 'Other Offerings',
        path: '/resources/other-offerings',
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
                <ListItem
                  button
                  key={name}
                  className={classes.nonExpandingItem}
                >
                  <DrawerMenuItem
                    currentPath={currentPath}
                    item={{name, path}}
                  />
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
