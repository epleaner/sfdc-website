import React from 'react';
import {Link} from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: 'inherit',
    textTransform: 'uppercase',
  },
  active: {
    borderBottom: `thin solid ${theme.palette.lightBlue}`,
  },
  menuButton: {
    marginRight: theme.spacing(1),
    fontWeight: 100,
  },
}));

const MenuItem = (props) => {
  const {
    currentPath,
    item: {name, path},
  } = props;

  const classes = useStyles();

  return (
    <Typography variant="h6" component="li">
      {path.startsWith('/') ? (
        <Button className={classes.menuButton}>
          <Link
            to={path}
            className={`${classes.link} ${currentPath === path &&
              classes.active}`}
          >
            {name}
          </Link>
        </Button>
      ) : (
        <Button className={classes.menuButton}>
          <a href={path} className={classes.link}>
            {name}
          </a>
        </Button>
      )}
    </Typography>
  );
};

export default MenuItem;
