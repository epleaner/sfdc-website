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
    borderBottom: `thin solid ${theme.palette.primaryBlue0}`,
  },
  menuButton: {
    marginRight: theme.spacing(1),
    fontWeight: 100,
  },
  menuListItem: {
    listStyle: 'none',
  },
}));

const MenuItem = (props) => {
  const {
    currentPath,
    item: {name, path},
  } = props;

  const classes = useStyles();

  return (
    <Typography variant="h6" component="li" className={classes.menuListItem}>
      {path.startsWith('/') ? (
        <Link to={path} className={`${classes.link}`}>
          <Button
            className={`${classes.menuButton} ${currentPath === path &&
              classes.active}`}
          >
            {name}
          </Button>
        </Link>
      ) : (
        <a href={path} className={classes.link}>
          <Button className={classes.menuButton}>{name}</Button>
        </a>
      )}
    </Typography>
  );
};

export default MenuItem;
