import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import withWidth from "@material-ui/core/withWidth";
import HeaderImagePath from "../../static/images/sfdc-header.png";
import { Link } from "gatsby";
import PopoverMenu from "./PopoverMenu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1),
    fontWeight: 100
  },
  title: {
    flexGrow: 1,
    fontWeight: 100,
    fontSize: "1.2em",
    minHeight: "64px",
    marginTop: "10px"
  },
  list: {
    width: "100vw",
    paddingTop: "50px"
  },
  headerImage: {
    maxWidth: "100px"
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    textTransform: "uppercase"
  },
  toolbar: {
    backgroundColor: theme.palette.backgroundColor
  },
  appBar: {
    backgroundColor: theme.palette.backgroundColor
  },
  closeButton: {
    position: "absolute",
    top: "12px",
    right: "17px"
  },
  active: {
    borderBottom: "thin solid #5ac8cd"
  }
}));

const ButtonAppBar = props => {
  const classes = useStyles();
  const {
    location: { pathname }
  } = props;

  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <Grid
      container
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <IconButton
        className={classes.closeButton}
        edge="start"
        aria-label="close-menu"
        onClick={toggleDrawer("right", false)}
      >
        <CloseIcon />
      </IconButton>
      <Grid item xs={12} container justify="center">
        <List>
          {[
            { name: "Home", path: "/" },
            { name: "Calendar", path: "/calendar" },
            { name: "Donate", path: "https://sfdharmacollective.org/donate" },
            { name: "About Us", path: "/about-us" },
            { name: "Leadership", path: "/about-us/leadership" },
            { name: "Contact", path: "/about-us/contact" },
            { name: "Teachers", path: "/teachers" },
            { name: "Newsletter", path: "/newsletter" },
            { name: "Volunteer", path: "/volunteer" },
            { name: "Resources", path: "/resources" },
            { name: "From Our Friends", path: "/resources/from-our-friends" },
            {
              name: "Local Sits / Centers",
              path: "/resources/local-sits-centers"
            },
            { name: "Podcasts", path: "/resources/podcasts" },
            {
              name: "Other Offerings @ SFDC",
              path: "/resources/other-offerings-sfdc"
            }
          ].map(({ name, path }, index) => (
            <ListItem className={classes.listItem} button key={index}>
              <Typography
                className={pathname === path && classes.active}
                variant="h6"
              >
                {path.startsWith("/") ? (
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
          ))}
        </List>
      </Grid>
    </Grid>
  );

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
                className={`${classes.link} ${pathname === "/" &&
                  classes.active}`}
              >
                Home
              </Link>
            </Button>
            <Button className={classes.menuButton}>
              <Link
                to="/calendar"
                className={`${classes.link} ${pathname === "/calendar" &&
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
              mainText={"About Us"}
              links={["Leadership", "Contact"]}
            />
            <Button className={classes.menuButton}>
              <Link
                to="/teachers"
                className={`${classes.link} ${pathname === "/teachers" &&
                  classes.active}`}
              >
                Teachers
              </Link>
            </Button>
            <Button className={classes.menuButton}>
              <Link
                to="/newsletter"
                className={`${classes.link} ${pathname === "/newsletter" &&
                  classes.active}`}
              >
                Newsletter
              </Link>
            </Button>
            <Button className={classes.menuButton}>
              <Link
                to="/volunteer"
                className={`${classes.link} ${pathname === "/volunteer" &&
                  classes.active}`}
              >
                Volunteer
              </Link>
            </Button>
            <PopoverMenu
              mainText={"Resources"}
              pathname={pathname}
              links={[
                "From Our Friends",
                "Local Sits / Centers",
                "Podcasts",
                "Other Offerings @ SFDC"
              ]}
            />
          </Hidden>
          <Hidden mdUp>
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={toggleDrawer("right", true)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden mdUp>
            <Drawer
              anchor="right"
              open={state.right}
              onClose={toggleDrawer("right", false)}
            >
              {sideList("right")}
            </Drawer>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Toolbar disableGutters={true} className={classes.toolbar} />
    </div>
  );
};

export default withWidth()(ButtonAppBar);
