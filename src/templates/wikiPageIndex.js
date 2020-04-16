import React from "react";
import { Link as GatsbyLink } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import ContentfulRichText from "../components/ContentfulRichText";

const useStyles = makeStyles({
  ul: {
    listStyle: "none",
  },
  li: {
    fontSize: "1.7rem",
  },
  anchor: {
    color: "rgba(62,149,153,1)",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

const WikiPageTemplate = ({ pageContext: { wikiPageNames } }) => {
  const classes = useStyles();

  const title = `Teaching Resources`;
  return (
    <Layout>
      <SEO
        title={title}
        description={`San Francisco Dharma Collective Teaching Resources`}
      />
      <Grid container justify="center">
        <Grid item xs={12}>
          <Box mb={6}>
            <Typography align="center" variant="h2" component="h1">
              {title}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box mb={3}>
            <ul className={classes.ul}>
              {wikiPageNames.map((name) => (
                <Typography key={name} className={classes.li} component="li">
                  <Box mb={3}>
                    <GatsbyLink
                      className={classes.anchor}
                      to={`teaching-resources/${name
                        .toLowerCase()
                        .split(" ")
                        .join("-")}`}
                    >
                      {name}
                    </GatsbyLink>
                  </Box>
                </Typography>
              ))}
            </ul>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default WikiPageTemplate;
