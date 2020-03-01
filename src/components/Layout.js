import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiTheme from '../styles/muiTheme';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Footer from '../components/Footer';
import Header from '../components/Header';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#fafafa',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    margin: '40px 0',
  },
  divider: {
    margin: '40px 0',
  },
});

const Layout = (props) => {
  const classes = useStyles();

  return (
    <CssBaseline>
      <ThemeProvider theme={MuiTheme}>
        <Container className={classes.root}>
          <Box mb={3}>
            <Header />
          </Box>
          <main id="main">{props.children}</main>
          <Footer />
        </Container>
      </ThemeProvider>
    </CssBaseline>
  );
};

export default Layout;
