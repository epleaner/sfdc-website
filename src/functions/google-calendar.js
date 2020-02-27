const { google } = require("googleapis");
let privatekey = require("../../credentials.json")

const calendarId = "6lmk34aeh3mpas0kop9ve8hc94@group.calendar.google.com";

function handleError(error, callback) {
  console.log("There was an error...", error);
  callback(null, {
    statusCode: 400,
    body: JSON.stringify(error),
  })
}

export function handler(event, context, callback) {
  const jwtClient = new google.auth.JWT(
    privatekey.client_email,
    null,
    privatekey.private_key,
    ["https://www.googleapis.com/auth/calendar"]
  )

  jwtClient.authorize(function(error, tokens) {
    if (error) {
      handleError(error, callback)
    } else {
      console.log("Successfully connected to Google API");
    }
  })

  const calendar = google.calendar("v3")

  console.log("Listing calendar events for ", calendarId)

  calendar.events.list(
    {
      auth: jwtClient,
      calendarId: calendarId
    },
    function(error, response) {
      if (error) {
        handleError(error, callback)
      }

      else {
        console.log("Success!")

        callback(null, {
          statusCode: 200,
          body: JSON.stringify(response),
        })
      }
    }
  )
}