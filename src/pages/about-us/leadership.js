import React from "react";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Leadership = () => {
  return (
    <Layout>
      <SEO
        title="Leadership"
        description="San Francisco Dharma Collective Leadership Page"
      />
      <Grid container spacing={6}>
        <Grid item container spacing={6}>
          <Grid item xs={12}>
            <Typography align="center" variant="h2">
              SF Dharma Collective Leadership
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" variant="h5">
              The San Francisco Dharma Collective is a sangha-led dharma
              community.
            </Typography>
          </Grid>
          <Grid container item spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1">
                Our leadership includes a board of directors and a number of
                committees.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                We meet on Monday evenings in San Francisco. If you are
                interested in attending a meeting, please contact{" "}
                <a href="mailto:sfdharmacollective@gmail.com">
                  sfdharmacollective@gmail.com
                </a>
                .
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                We welcome volunteers to join committees. If you are interested
                in volunteering, please contact{" "}
                <a href="mailto:sfdcvolunteers@gmail.com">
                  sfdcvolunteers@gmail.com
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" variant="h3">
              SF Dharma Collective Board of Directors
            </Typography>
          </Grid>
          <Grid item container xs={12}>
            <Grid item container justify="center" xs={12} sm={4}>
              <ul>
                <li>
                  <Typography align="center" variant="body1">
                    Brendan O'Hara
                  </Typography>
                </li>
                <li>
                  <Typography align="center" variant="body1">
                    Genevieve Church
                  </Typography>
                </li>
                <li>
                  <Typography align="center" variant="body1">
                    Jenny Doll
                  </Typography>
                </li>
              </ul>
            </Grid>
            <Grid item container justify="center" xs={12} sm={4}>
              <ul>
                <li>
                  <Typography align="center" variant="body1">
                    Kati Devaney
                  </Typography>
                </li>
                <li>
                  <Typography align="center" variant="body1">
                    Noam Szoke
                  </Typography>
                </li>
                <li>
                  <Typography align="center" variant="body1">
                    Rae Brosnan
                  </Typography>
                </li>
              </ul>
            </Grid>
            <Grid item container justify="center" xs={12} sm={4}>
              <ul>
                <li>
                  <Typography align="center" variant="body1">
                    Snow McNaughton
                  </Typography>
                </li>
                <li>
                  <Typography align="center" variant="body1">
                    Suzanne Hollis
                  </Typography>
                </li>
                <li>
                  <Typography align="center" variant="body1">
                    Tia Paquin
                  </Typography>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Leadership;
