import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { css } from "@emotion/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
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
    width: 250
  },
  listItem: {
    textAlign: "center"
  },
  headerImage: {
    maxWidth: "100px"
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  },
  toolbar: {
    backgroundColor: theme.palette.backgroundColor
  },
  appBar: {
    backgroundColor: theme.palette.backgroundColor
  }
}));

const ButtonAppBar = props => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
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
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {[
          "Home",
          "Calendar",
          "Donate",
          "About Us",
          "Teachers",
          "Newsletter",
          "Volunteer",
          "Resources"
        ].map((text, index) => (
          <ListItem className={classes.listItem} button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} elevation={0} position="fixed">
        <Toolbar>
          <Typography className={classes.title}>
            <img
              className={classes.headerImage}
              src={HeaderImagePath}
              alt="Header"
            />
          </Typography>
          <Hidden smDown>
            <Button className={classes.menuButton}>
              <Link to="/" className={classes.link}>
                Home
              </Link>
            </Button>
            <Button className={classes.menuButton}>
              <Link to="/calendar" className={classes.link}>
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
              mainText={"About Us"}
              links={["Leadership", "Contact"]}
            />
            <Button className={classes.menuButton}>
              <Link to="/teachers" className={classes.link}>
                Teachers
              </Link>
            </Button>
            <Button className={classes.menuButton}>
              <Link to="/newsletter" className={classes.link}>
                Newsletter
              </Link>
            </Button>
            <Button className={classes.menuButton}>
              <Link to="/volunteer" className={classes.link}>
                Volunteer
              </Link>
            </Button>
            <PopoverMenu
              mainText={"Resources"}
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
