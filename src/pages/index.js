import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import LotusImagePath from "../../static/images/lotus.png";

const useStyles = makeStyles(theme => ({
  lotusImage: { maxWidth: "500px", width: "100%", height: "100%" }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO
        title="Home"
        description="Home page of San Francisco Dharma Collective"
      />
      <Grid container direction="row" justify="center" alignItems="flex-start">
        <Grid
          sm={12}
          md={9}
          item
          container
          direction="row"
          justify="space-between"
        >
          <Grid item xs={12}>
            <Box mb={5}>
              <Typography align="center" variant="h1">
                Meditate with us.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" variant="h2">
              The SF Dharma Collective is a community-led sangha.
            </Typography>
          </Grid>
          <Grid item container justify="center" xs={12}>
            <Box my={5}>
              <img
                className={classes.lotusImage}
                src={LotusImagePath}
                alt="Lotus"
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" variant="body1">
              All classes and sits are open to all and no registration is
              necessary. We are supported by your generosity (dana). No one is
              ever turned away for lack of funds. SFDC is wheelchair accessible
              and has two accessible bathroom stalls. We use fragrance-free
              cleaning products.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
