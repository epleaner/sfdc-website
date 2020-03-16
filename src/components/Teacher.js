import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Img from 'gatsby-image';
import Link from '@material-ui/core/Link';
import React from 'react';
import TeacherBios from '../assets/teacher_bios.json';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  image: {
    borderRadius: '50%',
    width: '100%',
    height: '100%',
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
    <Grid container item xs={12} sm={5} md={4}>
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
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.anchor}
                  href={`https://${website}`}
                >
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
