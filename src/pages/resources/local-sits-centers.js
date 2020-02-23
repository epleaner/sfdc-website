import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({ listItem: { "&::before": { content: "–" } } });

const sitData = [
  {
    title: "Mission Dharma",
    body: [
      "Sangha led by Howarsd Cohn.",
      "St. John's Episcopal Church at the corner of 15th St and Julian",
      "Tuesdays  7:00 - 8:30 pm"
    ],
    urls: ["http://www.missiondharma.org/"]
  },
  {
    title: "San Francisco People of Color Insight Meditation Sangha",
    body: [
      "Wednesdays 6:00-7:30 p.m.",
      "Mission Language & Vocational School, 2929 19th St, San Francisco",
      "Follow @SFPOCInsightsangha"
    ],
    urls: [
      "http://sfpocsangha@gmail.com",
      "http://facebook.com/SFPOCInsightSangha/"
    ]
  },
  {
    title: "San Francisco Insight Meditation Community",
    body: [
      "Sunday evenings are led by Eugene Cash or a guest teacher, and Wednesday evenings are led by Pamela Weiss or a guest teacher. ",
      "Sundays, 7pm to 9pm in the Chapel",
      "Wednesdays,  7pm to 9pm in the Fireside Room",
      "First Unitarian Universalist Church of San Francisco, 1187 Franklin Street at the corner of Geary Blvd. "
    ],
    urls: ["https://www.sfinsight.org/"]
  },
  {
    title: "Gay Buddhist Fellowship",
    body: [
      "The Gay Buddhist Fellowship supports Buddhist practice in the Gay men’s community. It is a forum that brings together the diverse Buddhist traditions to address the spiritual concerns of Gay men in the San Francisco Bay Area, the United States, and the world. GBF’s mission includes cultivating a social environment that is inclusive and caring.",
      "Sunday, 10:30am - 12:30pm",
      "Weekly rotating teachers",
      "30 minute silent meditation followed by Dharma talk by guest teachers and social time",
      "SF Buddhist Center, 37 Bartlett St., San Francisco"
    ],
    urls: ["www.gaybuddhist.org", "http://facebook.com/gaybuddhistfellowship/"]
  },
  {
    title: "Insight Upper Market",
    body: [
      "Mondays, 6:00 pm -7:15 pm",
      "Guiding Teacher: John Martin",
      "Spark Arts, 4229 18th St, SF"
    ],
    urls: ["http://insightuppermarket.org/"]
  }
];
const otherSitsData = [
  {
    url: "https://www.abhayagiri.org/",
    name: "Abhayagiri Buddhist Monastery",
    location: ""
  },
  { url: "https://alokavihara.org/", name: "Aloka Vihara", location: "" },
  {
    url: "https://coastsidevipassana.org/",
    name: "Coastside Vipassana",
    location: "Montara"
  },
  {
    url: "https://eastbaymeditation.org",
    name: "East Bay Meditation Center",
    location: "Oakland"
  },
  {
    url: "http://www.insightmeditationcenter.org/",
    name: "Insight Meditation Center",
    location: "Redwood City"
  },
  {
    url: "https://www.imsb.org/",
    name: "Insight Meditation South Bay with Shaila Catherine",
    location: ""
  },
  {
    url: "https://www.insightsantacruz.org/",
    name: "Insight Santa Cruz",
    location: "Santa Cruz"
  },
  {
    url: "https://sfbuddhistcenter.org",
    name: "San Francisco Buddhist Center",
    location: "San Francisco"
  },
  {
    url: "http://www.spiritrock.org/",
    name: "Spirit Rock Meditation Center",
    location: "Marin County"
  },
  {
    url: "http://www.sfzc.org/",
    name: "San Francisco Zen Center",
    location: "San Francisco, Green Gulch, and Tassajara"
  },
  {
    url: "https://www.sanjoseinsight.org/",
    name: "San Jose Sangha",
    location: "San Jose"
  },
  {
    url: "Tathagata Meditation Center",
    name: "Tathagata Meditation Center",
    location: "San Jose"
  }
];

const LocalSits = () => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO
        title="LocalSits"
        description="San Francisco Dharma Collective Local Sits Page"
      />
      <Grid container>
        <Grid item xs={12} container>
          <Grid item xs={12}>
            <Box mb={4}>
              <Typography align="center" variant="h2">
                San Francisco Sits and Centers
              </Typography>
            </Box>
          </Grid>
          <Grid item container xs={12}>
            {sitData.map((data, index) => (
              <Grid item container xs={12} sm={6}>
                <Box mb={4}>
                  <Card>
                    <CardContent>
                      <Grid item container xs={12}>
                        <Grid item xs={12}>
                          <Typography variant="h6">{data.title}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <ul>
                            {data.body.map((bodyText, bodyIndex) => (
                              <li
                                className={classes.listItem}
                                key={`${index}${bodyIndex}`}
                              >
                                <Typography variant="body1">
                                  – {bodyText}
                                </Typography>
                              </li>
                            ))}
                          </ul>
                        </Grid>
                        <Grid item xs={12}>
                          {data.urls.map((url, urlIndex) => (
                            <Typography
                              key={`${index}${urlIndex}`}
                              variant="body1"
                            >
                              <a href={url}>{url}</a>
                            </Typography>
                          ))}
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} container>
          <Grid item xs={12}>
            <Box mb={4}>
              <Typography align="center" variant="h2">
                Other sits
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mb={4}>
              <Typography align="center" variant="h5">
                Other places where the greater Bay Area goes to meditate and
                engage with the Dharma
              </Typography>
            </Box>
          </Grid>
          <Grid item container justify="center" xs={12}>
            <ul>
              {otherSitsData.map((otherSitData, otherSitDataIndex) => (
                <li key={otherSitDataIndex}>
                  <Box mb={2}>
                    <Typography variant="body1">
                      <a href={otherSitData.url}>{otherSitData.name}</a>
                      {otherSitData.location.length > 0 &&
                        ` (${otherSitData.location})`}
                    </Typography>
                  </Box>
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default LocalSits;
