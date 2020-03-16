import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Layout from '../../components/Layout';
import Link from '@material-ui/core/Link';
import React from 'react';
import SEO from '../../components/SEO';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  anchor: {
    color: 'rgba(62,149,153,1)',
    textDecoration: 'none',
    lineBreak: 'anywhere',
  },
});

const contactData = [
  {name: 'Programming', email: 'programming.sfdharmacollective@gmail.com'},
  {name: 'Volunteers', email: 'sfdcvolunteers@gmail.com'},
  {name: 'Marketing', email: 'sfdharmacollective@gmail.com'},
  {name: 'Finance', email: 'finance.sfdharmacollective@gmail.com '},
  {name: 'Buildings', email: 'sfdharmacollective@gmail.com'},
  {name: 'Teacher', email: 'sfdharmacollective@gmail.com'},
  {name: 'Arts', email: 'art.sfdharmacollective@gmail.com'},
];

const Contact = () => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO
        title="Contact"
        description="Contact page of San Francisco Dharma Collective, a sangha-run meditation collective in San Francisco's Mission district"
      />
      <Grid container>
        <Grid item xs={12}>
          <Box mb={5}>
            <Typography align="center" variant="h2" component="h1">
              SF Dharma Collective Committees Contact Information
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} alignItems="center" container>
          {contactData.map((data, index) => (
            <Grid item key={index} xs={12} alignItems="center" container>
              <Grid item xs={12} sm={2}>
                <Typography variant="h6" component="h2">
                  {data.name}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={10}>
                <Typography variant="body1">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`mailto:${data.email}`}
                    className={classes.anchor}
                  >
                    {data.email}
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Contact;
