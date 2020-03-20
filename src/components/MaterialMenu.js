import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import DrawerMenu from './DrawerMenu';
import Grid from '@material-ui/core/Grid';
import HeaderImagePath from '../assets/images/sfdc-header.png';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'gatsby';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from './MenuItem';
import PopoverMenu from './PopoverMenu';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    marginTop: '10px',
  },
  headerImage: {
    'maxWidth': '90px',
    'transition': 'all 0.2s ease-in-out',
    '&:hover': {
      filter:
        'invert(82%) sepia(47%) saturate(536%) hue-rotate(136deg) brightness(84%) contrast(89%)',
    },
  },
  appBar: {
    backgroundColor: theme.palette.backgroundColor,
  },
}));

const menuItems = [
  {name: 'Home', path: '/'},
  {
    name: 'About Us',
    path: '/about-us',
    nested: ['Teachers', 'Leadership', 'Contact'],
  },
  {
    name: 'Upcoming Events',
    path: '/upcoming-events',
    nested: ['Calendar'],
  },
  {name: 'Donate', path: '/donate'},
  {name: 'Volunteer', path: '/volunteer'},
  {name: 'Newsletter', path: '/newsletter'},
  {
    name: 'Resources',
    path: '/resources',
    nested: [
      'From Our Friends',
      'Local Centers',
      'Podcasts',
      'Other Offerings',
    ],
  },
];

const MaterialMenu = (props) => {
  const {
    location: {pathname},
  } = props;

  const classes = useStyles();

  const [showDrawerMenu, setShowDrawerMenu] = React.useState(false);

  const toggleDrawerMenu = (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setShowDrawerMenu(!showDrawerMenu);
  };

  return (
    <>
      <AppBar className={classes.appBar} position="relative" elevation={0}>
        <Toolbar disableGutters component="nav">
          <Typography className={classes.title}>
            <Link to="/">
              <img
                className={classes.headerImage}
                src={HeaderImagePath}
                alt="SFCD Logo"
              />
            </Link>
          </Typography>
          <Hidden mdDown>
            {menuItems.map(({name, path, nested}) =>
              nested ? (
                <PopoverMenu
                  key={name}
                  mainText={name}
                  links={nested}
                  currentPath={pathname}
                />
              ) : (
                <MenuItem
                  key={name}
                  currentPath={pathname}
                  item={{name, path}}
                />
              ),
            )}
          </Hidden>
          <Hidden lgUp>
            <>
              <IconButton
                edge="start"
                aria-label="menu"
                onClick={toggleDrawerMenu}
              >
                <MenuIcon />
              </IconButton>
              <DrawerMenu
                toggleDrawerMenu={toggleDrawerMenu}
                isOpen={showDrawerMenu}
                currentPath={pathname}
              />
            </>
          </Hidden>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default withWidth()(MaterialMenu);
