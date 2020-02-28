import React from 'react';
import {Link} from 'gatsby';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import HeaderImagePath from '../../static/images/sfdc-header.png';
import PopoverMenu from './PopoverMenu';
import DrawerMenu from './DrawerMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
    fontWeight: 100,
  },
  title: {
    flexGrow: 1,
    fontWeight: 100,
    fontSize: '1.2em',
    minHeight: '64px',
    marginTop: '10px',
  },
  headerImage: {
    maxWidth: '100px',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    textTransform: 'uppercase',
  },
  toolbar: {
    backgroundColor: theme.palette.backgroundColor,
  },
  appBar: {
    backgroundColor: theme.palette.backgroundColor,
  },
  active: {
    borderBottom: 'thin solid #5ac8cd',
  },
}));

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
    <div className={classes.root}>
      <AppBar className={classes.appBar} elevation={0} position="fixed">
        <Toolbar>
          <Typography className={classes.title}>
            <Link to="/">
              <img
                className={classes.headerImage}
                src={HeaderImagePath}
                alt="Header"
              />
            </Link>
          </Typography>
          <Hidden smDown>
            <Button className={classes.menuButton}>
              <Link
                to="/"
                className={`${classes.link} ${pathname === '/' &&
                  classes.active}`}
              >
                Home
              </Link>
            </Button>
            <Button className={classes.menuButton}>
              <Link
                to="/calendar"
                className={`${classes.link} ${pathname === '/calendar' &&
                  classes.active}`}
              >
                Calendar
              </Link>
            </Button>
            <Button className={classes.menuButton}>
              <a
                href="https://sfdharmacollective.org/donate"
                className={classes.link}
              >
                Donate
              </a>
            </Button>
            <PopoverMenu
              pathname={pathname}
              mainText={'About Us'}
              links={['Leadership', 'Contact']}
            />
            <Button className={classes.menuButton}>
              <Link
                to="/teachers"
                className={`${classes.link} ${pathname === '/teachers' &&
                  classes.active}`}
              >
                Teachers
              </Link>
            </Button>
            <Button className={classes.menuButton}>
              <Link
                to="/newsletter"
                className={`${classes.link} ${pathname === '/newsletter' &&
                  classes.active}`}
              >
                Newsletter
              </Link>
            </Button>
            <Button className={classes.menuButton}>
              <Link
                to="/volunteer"
                className={`${classes.link} ${pathname === '/volunteer' &&
                  classes.active}`}
              >
                Volunteer
              </Link>
            </Button>
            <PopoverMenu
              mainText={'Resources'}
              pathname={pathname}
              links={[
                'From Our Friends',
                'Local Sits / Centers',
                'Podcasts',
                'Other Offerings @ SFDC',
              ]}
            />
          </Hidden>
          <Hidden mdUp>
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={toggleDrawerMenu}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden mdUp>
            <DrawerMenu
              toggleDrawerMenu={toggleDrawerMenu}
              isOpen={showDrawerMenu}
              currentPath={pathname}
            />
          </Hidden>
        </Toolbar>
      </AppBar>
      <Toolbar disableGutters={true} className={classes.toolbar} />
    </div>
  );
};

export default withWidth()(MaterialMenu);
