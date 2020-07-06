import Button from '@material-ui/core/Button';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  input: {
    marginBottom: theme.spacing(2),
  },
}));

const DonateButton = () => {
  const classes = useStyles();
  return (
    <>
      <form
        action='https://www.paypal.com/cgi-bin/webscr'
        method='post'
        target='_blank'
        rel='noopener noreferrer'>
        <input type='hidden' name='cmd' value='_s-xclick' />
        <input type='hidden' name='hosted_button_id' value='6GNKVRA5CQ7E2' />
        <Box className={classes.input}>
          <Input
            type='text'
            name='custom'
            required
            placeholder='Teacher or class'
          />
        </Box>
        <Box>
          <Button
            type='submit'
            color='primary'
            size='large'
            variant='contained'>
            <Typography variant='body1' align='center'>
              Donate via PayPal
            </Typography>
          </Button>
        </Box>
      </form>
    </>
  );
};

export default DonateButton;
