import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import isEmail from 'validator/es/lib/isEmail';
import addToMailchimp from 'gatsby-plugin-mailchimp';

const useStyles = makeStyles({root: {maxWidth: '400px'}});

const MailChimpSignup = () => {
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
      addToMailchimp(email, {firstName, lastName}).then((data) => {
        setIsLoading(false);
        setMailChimpResponse(data);
      });
    }
  };

  return (
    <Grid container justify="center">
      <form
        id="mailchimp-form"
        className={classes.root}
        onSubmit={onSubmit}
        autoComplete="off"
      >
        <Grid container>
          <Grid item xs={12}>
            <Typography align="center">
              Subscribe to our mailing list
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              margin={'normal'}
              label="Email"
              variant="outlined"
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
          <Grid item xs={12}>
            <TextField
              fullWidth
              margin={'normal'}
              label="First Name"
              variant="outlined"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value.trim());
                setMailChimpResponse();
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              margin={'normal'}
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value.trim());
                setMailChimpResponse();
              }}
            />
          </Grid>
          <Grid item container justify="center" xs={12}>
            {mailChimpResponse ? (
              mailChimpResponse.result === 'success' ? (
                <Typography color="primary">{mailChimpResponse.msg}</Typography>
              ) : (
                <Typography color="error">
                  {Array(
                      mailChimpResponse.msg.match(/.+is already subscribed/),
                  )[0] || 'An error occured. Please try again!'}
                </Typography>
              )
            ) : (
              <Button
                disabled={isLoading}
                htmlFor="mailchimp-form"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
            )}
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default MailChimpSignup;
