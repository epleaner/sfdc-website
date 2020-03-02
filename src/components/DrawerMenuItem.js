import React from 'react';
import {Link} from 'gatsby';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: 'inherit',
    textTransform: 'uppercase',
  },
  active: {
    borderBottom: 'thin solid #5ac8cd',
  },
  small: {
    fontSize: '.9rem',
  },
});

const MenuItem = (props) => {
  const {
    currentPath,
    item: {name, path},
    small,
  } = props;

  const classes = useStyles();

  return (
    <Typography
      className={[
        currentPath === path && classes.active,
        small && classes.small,
      ].join(' ')}
      variant="h6"
      component="li"
    >
      {path.startsWith('/') ? (
        <Link className={classes.link} to={path}>
          {name}
        </Link>
      ) : (
        <a className={classes.link} href={path}>
          {name}
        </a>
      )}
    </Typography>
  );
};

export default MenuItem;
