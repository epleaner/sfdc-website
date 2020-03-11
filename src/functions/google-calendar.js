const moment = require('moment');
const {google} = require('googleapis');
const Base64 = require('js-base64').Base64;

const devCredentials = require('../../credentials.json');

const devCalendarId = 'efn6ejscdben4hvlh3msn9knlk@group.calendar.google.com';
const publicCalendarId = '6lmk34aeh3mpas0kop9ve8hc94@group.calendar.google.com';
const calendarId = publicCalendarId;

function handleError(error, callback) {
  console.log('There was an error...', error);
  callback(null, {
    statusCode: 400,
    body: JSON.stringify(error),
  });
}

export function handler(event, context, callback) {
  const clientEmail =
    process.env.GATSBY_GCAL_CLIENT_EMAIL || devCredentials.client_email;

  const privateKey = Base64.decode(
      process.env.GATSBY_GCAL_PRIVATE_KEY || devCredentials.private_key_base64,
  );

  const jwtClient = new google.auth.JWT(clientEmail, null, privateKey, [
    'https://www.googleapis.com/auth/calendar',
  ]);

  jwtClient.authorize(function(error, tokens) {
    if (error) {
      handleError(error, callback);
    } else {
      console.log('Successfully connected to Google API');

      const calendar = google.calendar('v3');

      console.log('Listing calendar events for ', calendarId);

      calendar.events.list(
          {
            auth: jwtClient,
            calendarId: calendarId,
            singleEvents: true,
            orderBy: 'startTime',
            maxResults: 2500,
            timeMin: moment()
                .startOf('week')
                .format(),
            timeMax: moment()
                .add(3, 'M')
                .endOf('month')
                .format(),
          },
          function(error, response) {
            if (error) {
              handleError(error, callback);
            } else {
              console.log('Success!');

              callback(null, {
                statusCode: 200,
                body: JSON.stringify(response),
              });
            }
          },
      );
    }
  });
}
