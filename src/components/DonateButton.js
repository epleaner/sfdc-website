import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    color: "inherit",
    textTransform: "uppercase",
    "&:hover": {
      textDecoration: "none",
    },
  },
});

const DonateButton = () => {
  const classes = useStyles();

  return (
    <>
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_blank"
        rel="noopener noreferrer"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="D96EWSRRPKUVA" />
        <Button type="submit" color="primary" size="large" variant="contained">
          <Typography variant="body1" align="center">
            Donate via PayPal
          </Typography>
        </Button>
      </form>
    </>
  );
};

export default DonateButton;
