import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ContentfulRichText from "../components/ContentfulRichText";

const WikiPageTemplate = ({ pageContext }) => {
  const title = `Teaching Resources for ${pageContext.name}`;
  return (
    <Layout>
      <SEO
        title={title}
        description={`San Francisco Dharma Collective Teaching Resources for ${pageContext.name}`}
      />
      <Grid container justify="center">
        <Grid item xs={12}>
          <Box mb={6}>
            <Typography align="center" variant="h2" component="h1">
              {title}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box mb={3}>
            <ContentfulRichText json={pageContext.contentJson} />
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default WikiPageTemplate;
