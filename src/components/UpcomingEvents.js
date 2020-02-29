import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {parseEvents} from '../utils/eventParser';
import MonthList from './MonthList';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}));

const UpcomingEvents = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [eventData, setEventData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch('/.netlify/functions/google-calendar')
        .then((response) => response.json())
        .then((responseJson) => responseJson.data.items)
        .then((responseDataItems) => {
          setEventData(parseEvents(responseDataItems));
          setIsLoading(false);
        });
  }, []);

  let headerText;
  if (isLoading) headerText = 'Loading upcoming events...';
  else if (eventData.length === 0) headerText = 'No events found';
  else headerText = 'Upcoming Events';

  return (
    <List
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader>
          <Box mb={2}>
            <Typography variant={'h3'}>{headerText}</Typography>
          </Box>
        </ListSubheader>
      }
      className={classes.root}
    >
      {!isLoading && <MonthList eventData={eventData} />}
    </List>
  );
};

export default UpcomingEvents;
