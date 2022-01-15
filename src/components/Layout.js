import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiTheme from '../styles/muiTheme';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NewsletterBanner from '../components/NewsletterBanner';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.backgroundColor,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      padding: '0 50px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '0 150px',
    },
  },
  header: {
    margin: '40px 0',
  },
  divider: {
    margin: '40px 0',
  },
}));

const Layout = (props) => {
  const classes = useStyles();

  return (
    <CssBaseline>
      <ThemeProvider theme={MuiTheme}>
        <Container className={classes.root}>
          <Box mb={3}>
            <NewsletterBanner />
            <Header />
          </Box>
          <main id='main'>{props.children}</main>
          <Footer />
        </Container>
      </ThemeProvider>
    </CssBaseline>
  );
};

export default Layout;
