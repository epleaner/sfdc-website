import React, {useState} from 'react';
import {Link} from 'gatsby';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles({
  hidden: {
    display: 'none',
  },
  icon: {
    transition: 'all 0.3s ease-in-out',
    marginLeft: '5px',
  },
  iconCollapse: {
    transform: 'rotate(-180deg)',
  },
  expandedContent: {
    paddingLeft: '20px',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    textTransform: 'uppercase',
  },
  nested: {
    paddingLeft: '29px',
  },
  active: {
    borderBottom: 'thin solid #5ac8cd',
  },
});

const ExpandingMenu = (props) => {
  const {mainItem, nestedItems, currentPath, render} = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const classes = useStyles();

  const toggleExpanded = (event) => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <ListItem button key={mainItem.name}>
        <Typography
          className={currentPath === mainItem.path ? classes.active : ''}
          variant="h6"
          component="li"
        >
          {mainItem.path.startsWith('/') ? (
            <Link className={classes.link} to={mainItem.path}>
              {mainItem.name}
            </Link>
          ) : (
            <a className={classes.link} href={mainItem.path}>
              {mainItem.name}
            </a>
          )}
        </Typography>
        <IconButton
          className={`
          ${classes.icon}
          ${isExpanded ? classes.iconCollapse : ''}
          `}
          edge="start"
          aria-label="close-menu"
          onClick={toggleExpanded}
          onKeyDown={toggleExpanded}
        >
          <ExpandMoreIcon />
        </IconButton>
      </ListItem>
      {isExpanded ?
        nestedItems.map((nestItem) => (
          <ListItem button key={nestItem.name} className={classes.nested}>
            <Typography
              className={currentPath === nestItem.path ? classes.active : ''}
              variant="h6"
              component="li"
            >
              {nestItem.path.startsWith('/') ? (
                  <Link className={classes.link} to={nestItem.path}>
                    {nestItem.name}
                  </Link>
                ) : (
                  <a className={classes.link} href={nestItem.path}>
                    {nestItem.name}
                  </a>
                )}
            </Typography>
          </ListItem>
        )) :
        null}
    </>
  );
};

export default ExpandingMenu;
