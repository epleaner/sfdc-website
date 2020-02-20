import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { css } from '@emotion/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import withWidth from '@material-ui/core/withWidth'

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
  list: {
    width: 250,
  },
  listItem: {
    textAlign: 'center',
  },
}))

const ButtonAppBar = props => {
  const { width, onMenuClick } = props
  const classes = useStyles()

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [side]: open })
  }

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {[
          'Home',
          'Calendar',
          'Donate',
          'About Us',
          'Teachers',
          'Newsletter',
          'Volunteer',
          'Resources',
        ].map((text, index) => (
          <ListItem className={classes.listItem} button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <div className={classes.root}>
      <AppBar color="inherit" position="fixed">
        <Toolbar>
          <Typography className={classes.title}>
            SF Dharma Collective
          </Typography>
          <Hidden smDown>
            <Button className={classes.menuButton}>Home</Button>
            <Button className={classes.menuButton}>Calendar</Button>
            <Button className={classes.menuButton}>Donate</Button>
            <Button className={classes.menuButton}>About Us</Button>
            <Button className={classes.menuButton}>Teachers</Button>
            <Button className={classes.menuButton}>Newsletter</Button>
            <Button className={classes.menuButton}>Volunteer</Button>
            <Button className={classes.menuButton}>Resources</Button>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer('right', true)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden mdUp>
            <Drawer
              anchor="right"
              open={state.right}
              onClose={toggleDrawer('right', false)}
            >
              {sideList('right')}
            </Drawer>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  )
}

export default withWidth()(ButtonAppBar)
