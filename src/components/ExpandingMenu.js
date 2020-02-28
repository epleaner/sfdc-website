import React, {useState} from 'react';
import {Link} from 'gatsby';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuItem from './MenuItem';

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
        <MenuItem currentPath={currentPath} item={mainItem} />
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
        nestedItems.map((nestedItem) => (
          <ListItem button key={nestedItem.name}>
            <MenuItem currentPath={currentPath} item={nestedItem} />
          </ListItem>
        )) :
        null}
    </>
  );
};

export default ExpandingMenu;
