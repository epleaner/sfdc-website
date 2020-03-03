import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  list: {
    width: '100%',
  },
}));

export default function EventListContainer(props) {
  const {headerText, children} = props;
  const classes = useStyles();

  return (
    <List
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader disableSticky>
          <Box mb={3}>
            <Typography variant={'h3'} align="center">
              {headerText}
            </Typography>
          </Box>
        </ListSubheader>
      }
      className={classes.list}
    >
      {children}
    </List>
  );
}
