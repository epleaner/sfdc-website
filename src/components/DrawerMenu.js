import CloseIcon from '@material-ui/icons/Close';
import Drawer from '@material-ui/core/Drawer';
import DrawerMenuItem from './DrawerMenuItem';
import ExpandingMenu from './ExpandingMenu';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  list: {
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
    },
    [theme.breakpoints.up('sm')]: {
      width: '320px',
    },
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
}));

const menuItems = [
  {name: 'Home', path: '/'},
  {
    name: 'About Us',
    path: '/about-us',
    nested: [
      {name: 'Teachers', path: '/about-us/teachers'},
      {name: 'Leadership', path: '/about-us/leadership'},
      {name: 'Contact', path: '/about-us/contact'},
    ],
  },
  {
    name: 'Upcoming Events',
    path: '/upcoming-events',
    nested: [
      {
        name: 'Calendar',
        path: '/upcoming-events/calendar',
      },
    ],
  },
  {name: 'Donate', path: '/donate'},
  {name: 'Volunteer', path: '/volunteer'},
  {name: 'Newsletter', path: '/newsletter'},
  {
    name: 'Resources',
    path: '/resources',
    nested: [
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
