import React from 'react';
import Img from 'gatsby-image';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TeacherBios from '../assets/teacher_bios.json';

const useStyles = makeStyles((theme) => ({
  image: {
    borderRadius: '50%',
    minHeight: '244px',
  },
  imageContainer: {
    margin: theme.spacing(2),
  },
  card: {
    'margin': theme.spacing(2),
    'width': '100%',
    'transition': 'all 0.2s ease-in-out',
    '&:hover': {opacity: '.75'},
  },
  anchor: {
    color: 'rgba(62,149,153,1)',
    textDecoration: 'none',
  },
}));
const Teacher = (props) => {
  const {fluidImage} = props;

  const classes = useStyles();

  const name = fluidImage.originalName
      .replace(/_/g, ' ')
      .replace(/\.(jpg)|\.(png)/g, '');

  const teacherHasWebsite = TeacherBios.filter(
      ({name: teacherName, website}) => {
        return teacherName === name;
      },
  );

  const website = teacherHasWebsite.length > 0 && teacherHasWebsite[0].website;

  return (
    <Grid container item xs={12} sm={5} md={4} lg={3}>
      <Card className={classes.card}>
        <CardMedia className={classes.imageContainer} title={name}>
          <Img className={classes.image} fluid={fluidImage} alt={name} />
        </CardMedia>
        <CardContent>
          <Typography align="center" variant="body1" component="h1">
            {name}
          </Typography>
          {website && (
            <Grid item xs={12}>
              <Typography align="center" variant="body2" component="h1">
                <Link className={classes.anchor} href={`https://${website}`}>
                  {website}
                </Link>
              </Typography>
            </Grid>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Teacher;
