const { google } = require("googleapis");
let privatekey = require("./credentials.json");

// configure a JWT auth client
let jwtClient = new google.auth.JWT(
  privatekey.client_email,
  null,
  privatekey.private_key,
  ["https://www.googleapis.com/auth/calendar"]
);
//authenticate request
jwtClient.authorize(function(err, tokens) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("Successfully connected!");
  }
});

//Google Calendar API
let calendar = google.calendar("v3");
calendar.events.list(
  {
    auth: jwtClient,
    calendarId: "6lmk34aeh3mpas0kop9ve8hc94@group.calendar.google.com"
  },
  function(err, response) {
    if (err) {
      console.log("The API returned an error: " + err);
      return;
    }
    try {
      var events = response.data.items;
      console.log(response.data);
      if (events.length == 0) {
        console.log("No events found.");
      } else {
        console.log("Event from Google Calendar:");
        for (let event of events) {
          console.log(
            "Event name: %s, Creator name: %s, Create date: %s",
            event.summary,
            event.creator.displayName,
            event.start.date
          );
        }
      }
    } catch (e) {
      console.log(e);
    }
  }
);
