import React from "react";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Contact = () => {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="San Francisco Dharma Collective Contact Page"
      />
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography align="center" variant="h2">
            SF Dharma Collective Committees Contact Information
          </Typography>
        </Grid>
        <Grid item xs={12} alignItems="center" container>
          <Grid item xs={12} alignItems="center" container>
            <Grid item xs={12} sm={2}>
              <Typography variant="h6">Programming</Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Typography variant="body1">
                <a href="mailto:programming.sfdharmacollective@gmail.com">
                  programming.sfdharmacollective@gmail.com
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} alignItems="center" container>
            <Grid item xs={12} sm={2}>
              <Typography variant="h6">Volunteers</Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Typography variant="body1">
                <a href="mailto:sfdcvolunteers@gmail.com">
                  sfdcvolunteers@gmail.com
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} alignItems="center" container>
            <Grid item xs={12} sm={2}>
              <Typography variant="h6">Marketing</Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Typography variant="body1">
                <a href="mailto:sfdharmacollective@gmail.com">
                  sfdharmacollective@gmail.com
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} alignItems="center" container>
            <Grid item xs={12} sm={2}>
              <Typography variant="h6">Finance</Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Typography variant="body1">
                <a href="mailto:finance.sfdharmacollective@gmail.com ">
                  finance.sfdharmacollective@gmail.com
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} alignItems="center" container>
            <Grid item xs={12} sm={2}>
              <Typography variant="h6">Buildings & Grounds</Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Typography variant="body1">
                <a href="mailto:sfdharmacollective@gmail.com">
                  sfdharmacollective@gmail.com
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} alignItems="center" container>
            <Grid item xs={12} sm={2}>
              <Typography variant="h6">Teacher Outreach</Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Typography variant="body1">
                <a href="mailto:sfdharmacollective@gmail.com">
                  sfdharmacollective@gmail.com
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} alignItems="center" container>
            <Grid item xs={12} sm={2}>
              <Typography variant="h6">Arts & Community</Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Typography variant="body1">
                <a href="mailto:art.sfdharmacollective@gmail.com">
                  art.sfdharmacollective@gmail.com
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Contact;
