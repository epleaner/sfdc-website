import { graphql, useStaticQuery } from 'gatsby';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Layout from '../../components/Layout';
import Link from '@material-ui/core/Link';
import React from 'react';
import SEO from '../../components/SEO';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  anchor: {
    color: 'rgba(62,149,153,1)',
    textDecoration: 'none',
    lineBreak: 'anywhere',
  },
});

const Contact = () => {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    {
      contactJson: allContentfulContactInformation {
        nodes {
          data {
            email
            name
          }
        }
      }
    }
  `);

  const {
    contactJson: { nodes },
  } = data;

  const contactData = nodes[0].data;

  return (
    <>
      <SEO
        title='Contact'
        description="Contact page of San Francisco Dharma Collective, a sangha-run meditation collective in San Francisco's Mission district"
      />
      <Layout>
        <Grid container>
          <Grid item xs={12}>
            <Box mb={5}>
              <Typography align='center' variant='h2' component='h1'>
                SFDC Committee Contact Information
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={5}>
              <Typography align='center' variant='body2' component='h2'>
                <i>
                  For general inquiries, please reach out to{' '}
                  <Link
                    target='_blank'
                    rel='noopener noreferrer'
                    href={`mailto:sfdharmacollective@gmail.com`}
                    className={classes.anchor}>
                    sfdharmacollective@gmail.com
                  </Link>
                  .
                </i>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} alignItems='center' container>
            {contactData.map((data) => (
              <Grid item key={data.name} xs={12} alignItems='center' container>
                <Grid item xs={12} sm={2}>
                  <Typography variant='h6' component='h2'>
                    {data.name}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={10}>
                  <Typography variant='body2'>
                    <Link
                      target='_blank'
                      rel='noopener noreferrer'
                      href={`mailto:${data.email}`}
                      className={classes.anchor}>
                      {data.email}
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default Contact;
