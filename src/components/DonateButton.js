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
          href="https://paypal.me/sfdharmacollective"
          className={classes.link}
        >
          Donate via PayPal
        </Link>
      </Typography>
    </Button>
  );
};

export default DonateButton;
