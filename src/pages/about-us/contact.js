import React from "react";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const contactData = [
  { name: "Programming", email: "programming.sfdharmacollective@gmail.com" },
  { name: "Volunteers", email: "sfdcvolunteers@gmail.com" },
  { name: "Marketing", email: "sfdharmacollective@gmail.com" },
  { name: "Finance", email: "finance.sfdharmacollective@gmail.com " },
  { name: "Buildings", email: "sfdharmacollective@gmail.com" },
  { name: "Teacher", email: "sfdharmacollective@gmail.com" },
  { name: "Arts", email: "art.sfdharmacollective@gmail.com" }
];

const Contact = () => {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="San Francisco Dharma Collective Contact Page"
      />
      <Grid container>
        <Grid item xs={12}>
          <Box mb={5}>
            <Typography align="center" variant="h2">
              SF Dharma Collective Committees Contact Information
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} alignItems="center" container>
          {contactData.map((data, index) => (
            <Grid item key={index} xs={12} alignItems="center" container>
              <Grid item xs={12} sm={2}>
                <Typography variant="h6">{data.name}</Typography>
              </Grid>
              <Grid item xs={12} sm={10}>
                <Typography variant="body1">
                  <a href={`mailto:${data.email}`}>{data.email}</a>
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
