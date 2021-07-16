import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'

import AppMenuItem from './AppMenuItem'

const appMenuItems = [
  {
    name: 'HTML Editor',
    link: '/',
  },
  {
    name: 'CSS Editor',
    link: '/css',
  },
  {
    name: 'JavaScript Editor',
    link: '/javascript',
  },

]

const AppMenu: React.FC = () => {
  const classes = useStyles()

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {/* <AppMenuItem {...appMenuItems[0]} /> */}
      {appMenuItems.map((item, index) => (
        <AppMenuItem {...item} key={index} />
      ))}
    </List>
  )
}

const drawerWidth = 90

const useStyles = makeStyles(theme =>
  createStyles({
    appMenu: {
      width: '10px',
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  }),
)

export default AppMenu
