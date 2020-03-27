import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  issue: {
    '& a': {
      color: 'rgba(62,149,153,1)',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
});

export default () => {
  const [newsletterArchiveBody, setNewsletterArchiveBody] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          '/.netlify/functions/mailchimp-newsletter-archive'
        );

        const responseText = await response.text();

        const matches = [];
        responseText.replace(/document.write\((.+)\);/g, (m, p1) => {
          matches.push(p1);
        });

        let archiveBody = matches[0].replace(/\\/g, '');
        archiveBody = archiveBody.substring(1, archiveBody.length - 1);

        setNewsletterArchiveBody(archiveBody);
      } catch {
        setError(true);
      }

      setLoading(false);
    })();
  }, []);

  return (
    <article>
      <Box mb={3}>
        <Typography variant="h3" component="h2">
          {loading
            ? 'Fetching recent issues...'
            : error
            ? 'There was an error fetching recent issues.'
            : 'Recent Issues'}
        </Typography>
      </Box>
      {!loading && !error && (
        <Typography
          className={classes.issue}
          variant="body1"
          dangerouslySetInnerHTML={{
            __html: newsletterArchiveBody,
          }}
        ></Typography>
      )}
    </article>
  );
};
