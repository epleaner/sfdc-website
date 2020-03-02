import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Event from './Event.js';

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: `${theme.spacing(2)}px 0`,
  },
  eventList: {
    overflowY: 'auto',
    maxHeight: '100vh',
  },
}));

export default function EventList(props) {
  const {month, events} = props;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={month} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="article" disablePadding className={classes.eventList}>
          {events.map((event) => (
            <React.Fragment key={event.id}>
              <Event {...event} />
              <Divider className={classes.divider} />
            </React.Fragment>
          ))}
        </List>
      </Collapse>
    </>
  );
}