import React, { useState } from 'react';

import Avatar from '@material-ui/core/Avatar';

import ContentfulRichText from '../components/ContentfulRichText';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const Banner = ({ classes, title, content, media }) => {
  return (
    <Box key={title} p={2} marginBottom={2}>
      <Grid item container xs={12}>
        <Grid item xs={12} sm={10} className={`${classes.bannerText}`}>
          <ContentfulRichText json={content.json} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          className={`${classes.bannerImageOrder} flex items-center justify-center`}>
          <div className='mb-4'>
            {media &&
              media.map((img) => (
                <div className={classes.bannerImageContainer} key={img.id}>
                  <Avatar
                    className={classes.avatar}
                    key={img.id}
                    src={img.fixed.src}
                  />
                </div>
              ))}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
