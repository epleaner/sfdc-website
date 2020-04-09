import Divider from "@material-ui/core/Divider";
import Event from "./Event.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: `${theme.spacing(2)}px 0`,
  },
}));

export default function EventList(props) {
  const { month, events } = props;

  return (
    <>
      <ListItem>
        <ListItemText
          primary={
            <Typography variant="h3" component="h2">
              {month}
            </Typography>
          }
        />
      </ListItem>
      <List component="article" disablePadding>
        {events.map((event) => (
          <Event key={event.id} {...event} />
        ))}
      </List>
    </>
  );
}
