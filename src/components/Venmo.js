import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  icon: {
    height: '55px',
    marginBottom: '-20px',
  },
  link: {
    transition: 'all 0.2s linear',
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'none',
      color: 'rgba(62,149,153,1)',
    },
  },
});

const Venmo = () => {
  const classes = useStyles();

  return (
    <Grid container justify='center'>
      <Link
        target='_blank'
        rel='noopener noreferrer'
        className={classes.link}
        href='https://venmo.com/SF-dharma-collective'>
        <Grid item xs={12} container justify='center'>
          <svg className={classes.icon}>
            <defs>
              <symbol id='icon-venmo' viewBox='0 0 32 32'>
                <title>venmo</title>
                <path
                  fill='rgba(62,149,153,1)'
                  styles={{ fill: 'var(--color1, rgba(62,149,153,1)' }}
                  d='M5.253 12.96c0.227 0.36 0.32 0.72 0.32 1.187 0 1.48-1.267 3.4-2.293 4.76h-2.333l-0.947-5.627 2.053-0.2 0.493 4c0.467-0.747 1.040-1.933 1.040-2.747 0-0.44-0.080-0.747-0.2-1zM7.92 15.427c0.373 0 1.333-0.173 1.333-0.707 0-0.267-0.187-0.4-0.4-0.4-0.387 0-0.88 0.467-0.933 1.107zM7.88 16.493c0 0.667 0.36 0.933 0.853 0.933 0.533 0 1.027-0.133 1.693-0.467l-0.253 1.68c-0.467 0.227-1.187 0.373-1.893 0.373-1.773 0-2.413-1.067-2.413-2.427 0-1.747 1.040-3.6 3.173-3.6 1.173 0 1.84 0.653 1.84 1.573 0 1.467-1.907 1.933-3 1.933zM16.8 14.267c0 0.227-0.040 0.533-0.067 0.747l-0.613 3.893h-2l0.56-3.573 0.040-0.4c0-0.267-0.16-0.32-0.347-0.32-0.267 0-0.533 0.12-0.693 0.2l-0.64 4.093h-2l0.907-5.827h1.733l0.027 0.467c0.413-0.267 0.96-0.573 1.72-0.573 1.013 0 1.373 0.533 1.373 1.293zM22.733 13.613c0.573-0.4 1.107-0.64 1.867-0.64 1.013 0 1.373 0.533 1.373 1.307-0.006 0.264-0.030 0.517-0.071 0.764l0.004-0.031-0.613 3.893h-2l0.573-3.64 0.027-0.293c0-0.293-0.16-0.36-0.36-0.36-0.24 0-0.493 0.107-0.667 0.2l-0.64 4.093h-2l0.573-3.653 0.027-0.28c0-0.293-0.16-0.36-0.36-0.36-0.267 0-0.52 0.12-0.693 0.2l-0.627 4.080h-2.013l0.92-5.813h1.707l0.067 0.48c0.4-0.293 0.933-0.587 1.653-0.587 0.64 0 1.040 0.267 1.253 0.64zM29.947 15.307c0-0.467-0.12-0.8-0.467-0.8-0.8 0-0.96 1.4-0.96 2.107 0 0.547 0.147 0.88 0.507 0.88 0.747 0 0.92-1.467 0.92-2.187zM26.48 16.533c0-1.84 0.987-3.56 3.213-3.56 1.693 0 2.307 1 2.307 2.373 0 1.813-0.96 3.693-3.253 3.693-1.693 0-2.267-1.107-2.267-2.507z'></path>
              </symbol>
            </defs>
            <use xlinkHref='#icon-venmo'></use>
          </svg>
        </Grid>
        <Grid item xs={12} container justify='center'>
          <Typography variant='body2' align='center' component='span'>
            @Sf-dharma-collective
          </Typography>
        </Grid>
      </Link>
    </Grid>
  );
};

export default Venmo;
