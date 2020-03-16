import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';

const MuiTheme = responsiveFontSizes(
    createMuiTheme({
      props: {
        MuiButtonBase: {
          disableRipple: true,
        },
      },
      overrides: {
        MuiDivider: {
          root: {
            width: '50vw',
            margin: '0 auto',
          },
        },
        MuiButton: {
          outlinedPrimary: {
            'color': 'rgba( 62,149,153,1)',
            'border': '1px solid rgba( 62,149,153,1)',
            '&:hover': {
              color: 'rgba(244,254,254,1)',
              border: '1px solid rgba( 62,149,153,1)',
              backgroundColor: 'rgba( 62,149,153,1)',
            },
          },
          containedPrimary: {
            'background-color': 'rgba(62,149,153,1)',
            'border': '1px solid rgba( 62,149,153,1)',
            '&:hover': {
              color: 'rgba( 62,149,153,1)',
              border: '1px solid rgba( 62,149,153,1)',
              backgroundColor: 'rgba(244,254,254,1)',
            },
          },
        },
        MuiTypography: {
          colorPrimary: 'rgba(150,219,222,1)',
        },
      },
      palette: {
        backgroundColor: '#fafafa',

        primaryBlue0: 'rgba(150,219,222,1)' /* Main Primary color */,
        primaryBlue1: 'rgba(244,254,254,1)',
        primaryBlue2: 'rgba(199,241,243,1)',
        primaryBlue3: 'rgba(103,188,192,1)',
        primaryBlue4: 'rgba(62,149,153,1)',

        secondaryYellow0: 'rgba(255,228,172,1)' /* Main Secondary color (1) */,
        secondaryYellow1: 'rgba(255,252,245,1)',
        secondaryYellow2: 'rgba(255,240,209,1)',
        secondaryYellow3: 'rgba(255,216,136,1)',
        secondaryYellow4: 'rgba(254,204,102,1)',

        secondaryRed0: 'rgba(255,174,172,1)' /* Main Secondary color (2) */,
        secondaryRed1: 'rgba(255,245,245,1)',
        secondaryRed2: 'rgba(255,210,209,1)',
        secondaryRed3: 'rgba(255,139,136,1)',
        secondaryRed4: 'rgba(254,106,102,1)',

        complementaryOrange0: 'rgba(255,210,172,1)' /* Main Complement color */,
        complementaryOrange1: 'rgba(255,249,245,1)',
        complementaryOrange2: 'rgba(255,230,209,1)',
        complementaryOrange3: 'rgba(255,191,136,1)',
        complementaryOrange4: 'rgba(254,172,102,1)',
      },
      typography: {
        fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        h1: {
          fontWeight: 100,
          fontSize: '5.5rem',
        },
        h2: {
          fontSize: '2.5rem',
          fontWeight: 100,
        },
        h3: {
          fontSize: '2rem',
          fontWeight: 100,
        },
        h4: {
          fontSize: '1.5rem',
          fontWeight: 100,
        },
        h5: {
          fontSize: '1.25rem',
          fontWeight: 100,
        },
        h6: {
          fontSize: '1.15rem',
          fontWeight: 100,
        },
      },
    }),
);

export default MuiTheme;
