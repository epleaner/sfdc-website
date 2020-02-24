import React from "react";
import Layout from "../components/Layout";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SEO from "../components/SEO";

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO
        title="Not Found"
        description="San Francisco Dharma Collective Not Found Page"
      />
      <Grid container>
        <Grid item xs={12}>
          <Box mb={3}>
            <Typography align="center" variant="h2">
              Form is emptiness, emptiness is form. Form is not other than
              emptiness; emptiness is not other than form.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center" variant="body1">
            Sorry, the page you're looking for cannot be found.
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default NotFoundPage;
