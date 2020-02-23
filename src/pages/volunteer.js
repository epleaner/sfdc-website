import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import HandsImagePath from "../../static/images/hands.png";

import claudiaVolunteerPath from "../../static/images/volunteer/volunteer-claudia.jpg";
import noamVolunteerPath from "../../static/images/volunteer/volunteer-noam.jpg";
import raeVolunteerPath from "../../static/images/volunteer/volunteer-rae.jpg";
import ritaVolunteerPath from "../../static/images/volunteer/volunteer-rita.jpg";
import sueVolunteerPath from "../../static/images/volunteer/volunteer-sue.jpg";
import suzanneVolunteerPath from "../../static/images/volunteer/volunteer-suzanne.jpg";
import tiaVolunteerPath from "../../static/images/volunteer/volunteer-tia.jpg";
import vickiVolunteerPath from "../../static/images/volunteer/volunteer-vicki.jpg";

const volunteerData = [
  {
    imgSrc: claudiaVolunteerPath,
    name: "Claudia",
    testimony:
      "I volunteer at the SFDC because I want its doors to remain open to benefit me and the community at large. SFDC offers a spiritual path and a refuge where I have found a compassionate, nonjudgmental, and loving community with whom I share similar values. I immediately connected with this sangha because many of its members have endured experiences similar to mine such as trauma of all kinds starting with their family of origin, and/or are recovering from trauma, addictions, or mental illness like depression and anxiety. There is a depth of understanding here that it’s not easy to find elsewhere.\n\nThrough practical Buddhist principles taught by the many talented and knowledgeable teachers, and my meditation practice, I’ve been able to understand and transform destructive emotions such as anger into patience. I’ve also learned how to cultivate compassion for myself and others, loving-kindness, and empathetic joy. By being more mindful of my thoughts, actions, and speech, I can develop a bit more equanimity for I can choose how to respond in a challenging situation instead of react to it. As a result, my relationships have improved.\n\nFor all these reasons I am happy to not only volunteer, but also to be an ambassador for SFDC, a place dear and near to my heart."
  },
  {
    imgSrc: noamVolunteerPath,
    name: "Noam",
    testimony:
      "I volunteer because walking in the doors of 2701 Folsom changed my life for the better and I want to keep those doors open so that as many folks as possible have the opportunity I had. Volunteering at SFDC feels like part of my practice. Dana is not limited to monetary donations; it is generosity. Giving brings me joy, and feels like a reciprocal gesture that meets and balances with the generosity of others: the brilliant teachers who bring wisdom and compassion to us & the sangha whose sincerity of practice fuels mine."
  },
  {
    imgSrc: raeVolunteerPath,
    name: "Rae",
    testimony:
      "I volunteer because SFDC offers me a respite in the middle of a busy city, a busy life. It is a refuge from the dazzling distractions of this modern age. It gives me an opening to connect with my human roots, to existence, and to meaning. I seek to give back to this space and this community by sharing my time, my knowledge, and my energy so that others can also join to find deep meaning and connection."
  },
  {
    imgSrc: ritaVolunteerPath,
    name: "Rita",
    testimony:
      "I began cleaning the space about 5 years ago. I've always liked making spaces comfortable for others. And isn't it nice to have a comfortable, clean space to meditate and learn the dharma? I'm honored to be able to offer a tiny bit of comfort to my fellow sangha members. I also get to spend a lot of time in the space. This space has held many people seeking ease from suffering and understanding of the true nature of things. I just love being part of all that."
  },
  {
    imgSrc: sueVolunteerPath,
    name: "Sue",
    testimony:
      "Being a host volunteer has been a really great experience. I've gotten to connect personally with the teachers and members of the sangha in a way that I wouldn't have is hot hosting. I feel more connected to the center and a part of what's happening there. If I didn't sign up to volunteer I might have missed out of some good talks and cool events!"
  },
  {
    imgSrc: suzanneVolunteerPath,
    name: "Suzanne",
    testimony:
      "I volunteer because meditation is an integral part of my life. I’ve learned that it is far more than an individual practice, and the benefits of building it within a social context have provided me with a profound sense of connection and joy. The SF Dharma Collective’s values align with my own, and its sustainability is important to me. My day job is the non-profit field, and I know that the survival of community-based organizations depends on the community itself.\n\nVolunteering is one way I know I can support the mission, and contribute to the ideal of a world where all beings are afforded compassion and a path to freedom from suffering. Spending time volunteering in different capacities - whether greeting newer Sangha members or participating in collaborative activities devoted to the day-to-day operations of the center - has not only deepened my sense of interconnectedness, but has deepened my practice as well. I cannot begin to express my gratitude for the opportunity to contribute to a community I care so deeply about."
  },
  {
    imgSrc: tiaVolunteerPath,
    name: "Tia",
    testimony:
      "I walked in the door the first time because I had finally found a text that described how meditation helped someone ‘make it better’ for themselves that made sense to me. Since that first investigation of whether these folks were teaching things that made sense to me,  I can actually describe some of the ways meditation has improved my life. The two biggest ones at the moment are how being more aware also allows me to be more ‘in my body’ (embodied if you will) and the ways that helps me deal with chronic pain and past trauma issues; and how being present in the moment can create space between a thought and subsequent speech or action. Feeling more choice in what I do or say in response to things clearly fits what liberation means for me. I would not have been able to say I was looking for liberation when I first came, but it has been exciting to see how it feels to identify where it shows up in my life. I would not have said I was looking for community either, and I am so pleased to be learning with the folks who come here. I deeply appreciate this home, this refuge and the folks who volunteer with me to make it available to us all."
  },
  {
    imgSrc: vickiVolunteerPath,
    name: "Vicki",
    testimony:
      "I volunteer now because when I found SFDC it felt like a home when I needed a home, and I want to do what I can to help make that home available for others. I love having a space and a community to contribute to. When I first started volunteering though, it was more of a practical way to get to know the community better. I get shy, and it’s easier to say hello to folks if I have a job to do. I've also found hosting to be a great way to see a variety of teachers to learn about all the ideas that are out there - I like to just sign up for the nights I'm free, even if I don't know the teacher at all. I get to help out, and I've discovered some of my favorite teachers and topics this way - you never know what wisdom comes from a new perspective! "
  }
];

const useStyles = makeStyles(theme => ({
  handsImage: { maxWidth: "500px" },
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    margin: "auto"
  },
  testimony: {
    whiteSpace: "pre-wrap"
  }
}));

const Volunteer = () => {
  const classes = useStyles();

  return (
    <Layout>
      <SEO
        title="Volunteer"
        description="San Francisco Dharma Center Volunteer Page"
      />
      <Grid container>
        <Grid item container xs={12}>
          <Grid item container alignContent="center" xs={12} md={8}>
            <Grid item xs={12}>
              <Box mb={6}>
                <Typography variant="h2">
                  Volunteer at your SF Dharma Collective.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mb={2}>
                <Typography variant="body1">
                  Everything at SFDC happens because of our wonderful
                  volunteers. Volunteering is a powerful way to integrate your
                  practice into the world. It can foster a sense of purpose and
                  bring satisfaction and connect you to sangha, one of the three
                  jewels.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                SFDC invites YOU to volunteer! We are looking for volunteers to:
              </Typography>
              <ul>
                <li>
                  <Typography variant="body1">
                    – host our classes / sits / teachers
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    – help with PR / Marketing / Social Media
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">– website development</Typography>
                </li>
              </ul>
            </Grid>
          </Grid>
          <Grid item container justify="center" xs={12} md={4}>
            <Grid item xs={12}>
              <Box mb={3}>
                <img
                  className={classes.handsImage}
                  src={HandsImagePath}
                  alt="Lotus"
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mb={2}>
                <Typography variant="body1">
                  Your generosity and kindness go a long way toward bringing the
                  dharma to all.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box mb={4}>
                <Typography variant="body1">
                  If you are interested in volunteering, please contact{" "}
                  <a href="mailto:SFDCvolunteers@gmail.com">
                    SFDCvolunteers@gmail.com
                  </a>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={12}>
            <Box mb={4}>
              <Typography variant="h3">Why we volunteer</Typography>
            </Box>
          </Grid>
          <Grid item container xs={12}>
            {volunteerData.map((volunteer, index) => (
              <Grid item container alignItems="center" key={index} xs={12}>
                <Grid item xs={12} md={3}>
                  <Avatar
                    className={classes.avatar}
                    src={volunteer.imgSrc}
                    alt={volunteer.name}
                  />
                </Grid>
                <Grid item container xs={12} md={9}>
                  <Grid item xs={12}>
                    <Typography variant="h6">{volunteer.name}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className={classes.testimony} variant="body1">
                      {volunteer.testimony}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Box my={4}>
                    <Divider />
                  </Box>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Volunteer;
