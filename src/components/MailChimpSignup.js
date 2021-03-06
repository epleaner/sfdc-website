import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import isEmail from 'validator/es/lib/isEmail';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '400px',

    '& label.Mui-focused': {
      color: theme.palette.primaryBlue4,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.primaryBlue4,
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primaryBlue4,
      },
    },
  },
}));

const MailChimpSignup = ({ inline }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [mailChimpResponse, setMailChimpResponse] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const classes = useStyles();

  const onSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setEmailError(true);
      setEmailErrorMessage('Required');
    } else if (!isEmail(email)) {
      setEmailError(true);
      setEmailErrorMessage('Invalid email');
    } else {
      setIsLoading(true);
      setEmailError(false);
      addToMailchimp(email, {
        FNAME: firstName.trim(),
        LNAME: lastName.trim(),
      }).then((data) => {
        setIsLoading(false);
        setMailChimpResponse(data);
      });
    }
  };

  return (
    <Grid container justify='center' component='aside'>
      <form
        id='mailchimp-form'
        className={classes.root}
        onSubmit={onSubmit}
        autoComplete='off'>
        <Grid container alignItems='center'>
          <Grid item xs={12}>
            <Box mb={inline ? 0 : 3}>
              <Typography
                variant={inline ? 'h6' : 'h3'}
                component='h1'
                align='center'>
                Subscribe to our mailing list
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={inline ? 8 : 12}>
            <TextField
              size={inline ? 'small' : 'normal'}
              fullWidth
              label='Email'
              variant='outlined'
              required
              error={emailError}
              helperText={emailError && emailErrorMessage}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value.trim());
                setEmailError(false);
                setMailChimpResponse();
              }}
            />
          </Grid>
          {!inline && (
            <>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin={'normal'}
                  label='First Name'
                  variant='outlined'
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    setMailChimpResponse();
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin={'normal'}
                  label='Last Name'
                  variant='outlined'
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value.trim());
                    setMailChimpResponse();
                  }}
                />
              </Grid>
            </>
          )}
          <Grid item container justify='center' xs={inline ? 4 : 12}>
            <Box my={2}>
              {mailChimpResponse ? (
                <Box ml={3}>
                  {mailChimpResponse.result === 'success' ? (
                    <Typography color='primary' align='center'>
                      {mailChimpResponse.msg}
                    </Typography>
                  ) : (
                    <Typography color='error' align='center'>
                      {Array(
                        mailChimpResponse.msg.match(/.+is already subscribed/)
                      )[0] || 'An error occured. Please try again!'}
                    </Typography>
                  )}
                </Box>
              ) : (
                <Button
                  disabled={isLoading}
                  htmlFor='mailchimp-form'
                  color='primary'
                  type='submit'
                  variant='contained'>
                  Subscribe
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default MailChimpSignup;
