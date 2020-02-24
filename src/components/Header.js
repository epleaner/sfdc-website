import React from "react";
import { Location } from "@reach/router";
import { makeStyles } from "@material-ui/core/styles";
import MaterialMenu from "./MaterialMenu";

const useStyles = makeStyles(theme => ({
  header: {
    background: "#fafafa"
  }
}));

const Header = props => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Location>
        {locationProps => <MaterialMenu {...locationProps} />}
      </Location>
    </div>
  );
};

export default Header;
