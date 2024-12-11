import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import MenuItem from './MenuItem';
import PopoverMenu from './PopoverMenu';
import HeaderImagePath from '../assets/images/sfdc-header.png';
import DrawerMenu from './DrawerMenu';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    marginTop: '10px',
  },
  headerImage: {
    maxWidth: '110px',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      filter:
        'invert(82%) sepia(47%) saturate(536%) hue-rotate(136deg) brightness(84%) contrast(89%)',
    },
  },
  appBar: {
    backgroundColor: theme.palette.backgroundColor,
  },
}));

const MaterialMenu = (props) => {
  const menuItems = [
    { name: 'Home', path: '/' },
    {
      name: 'About Us',
      path: '/about-us',
      nested: [
        { name: 'Teachers', path: '/about-us/teachers' },
        { name: 'New Initatives', path: '/collective-dharma/new-initiatives' },
        { name: 'Leadership', path: '/about-us/leadership' },
        { name: 'Contact', path: '/about-us/contact' },
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
    { name: 'Donate', path: '/donate' },
    { name: 'Volunteer', path: '/volunteer' },
  ];

  const {
    location: { pathname },
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

  const { resourcePages } = useStaticQuery(graphql`
    {
      resourcePages: allContentfulResourcePage {
        edges {
          node {
            title
          }
        }
      }
    }
  `);

  const resourceMenuItem = {
    name: 'Collective Dharma Resources',
    path: '/collective-dharma',
    nested: [
      {
        name: 'Local Centers',
        path: '/collective-dharma/local-centers',
      },
      { name: 'Podcasts', path: '/collective-dharma/podcasts' },
      {
        name: 'Other Offerings',
        path: '/collective-dharma/other-offerings',
      },
      {
        name: 'SFDC Newsletter',
        path: '/newsletter',
      },
    ],
  };

  const contentfulPageTitles = [];

  resourcePages.edges.forEach(({ node: { title, urlSlug } }) =>
    contentfulPageTitles.push({
      name: title,
      path: `/collective-dharma/${urlSlug ||
        title
          .toLowerCase()
          .split(' ')
          .join('-')}`,
    })
  );

  resourceMenuItem.nested.unshift(...contentfulPageTitles);

  menuItems.push(resourceMenuItem);

  return (
    <>
      <AppBar className={classes.appBar} position='relative' elevation={0}>
        <Toolbar disableGutters component='nav'>
          <Typography className={classes.title}>
            <Link to='/'>
              <img
                className={classes.headerImage}
                src={HeaderImagePath}
                alt='SFCD Logo'
              />
            </Link>
          </Typography>
          <Hidden mdDown>
            {menuItems.map(({ name, path, nested }) =>
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
                  item={{ name, path }}
                />
              )
            )}
          </Hidden>
          <Hidden lgUp>
            <>
              <IconButton
                edge='start'
                aria-label='menu'
                onClick={toggleDrawerMenu}>
                <MenuIcon />
              </IconButton>
              <DrawerMenu
                menuItems={menuItems}
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
