import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import MailChimpSignup from "../components/MailChimpSignup";
import Grid from "@material-ui/core/Grid";

const Newsletter = () => {
  return (
    <Layout>
      <SEO
        title="Newsletter"
        description="San Francisco Dharma Collective Newsletter Page"
      />
      <Grid container>
        <Grid item xs={12} md={6}>
          <MailChimpSignup />
          <div />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Newsletter;
