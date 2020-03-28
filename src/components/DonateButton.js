import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  link: {
    'textDecoration': 'none',
    'color': 'inherit',
    'textTransform': 'uppercase',
    '&:hover': {
      textDecoration: 'none',
    },
  },
});

const DonateButton = () => {
  const classes = useStyles();

  return (
    <Button color="primary" size="large" variant="contained">
      <Typography variant="body1" align="center">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.paypal.com/donate/?token=sxMx_WscRfFMLTzT9C4S54_UAJmaSA1lt6z6Qmk8i7zgyxYrAhPscJOUVUis33Rj6Sf0eG&country.x=US&locale.x=US"
          className={classes.link}
        >
          Donate via PayPal
        </Link>
      </Typography>
    </Button>
  );
};

export default DonateButton;
