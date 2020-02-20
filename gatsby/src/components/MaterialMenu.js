import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { css } from '@emotion/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const StyledButton = children => (
  <Button
    css={css`
      text-transform: none;
    `}
  >
    {children}
  </Button>
)

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
    fontWeight: 100,
  },
  title: {
    flexGrow: 1,
    fontWeight: 100,
    fontSize: '1.2em',
  },
}))

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar color="inherit" position="fixed">
        <Toolbar>
          <Typography className={classes.title}>
            SF Dharma Collective
          </Typography>
          <Button className={classes.menuButton}>Home</Button>
          <Button className={classes.menuButton}>Calendar</Button>
          <Button className={classes.menuButton}>Donate</Button>
          <Button className={classes.menuButton}>About Us</Button>
          <Button className={classes.menuButton}>Teachers</Button>
          <Button className={classes.menuButton}>Newsletter</Button>
          <Button className={classes.menuButton}>Volunteer</Button>
          <Button className={classes.menuButton}>Resources</Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  )
}
