import React from 'react';
import AccountBox from '@material-ui/icons/AccountBox';
import Assessment from '@material-ui/icons/Assessment';
import Settings from '@material-ui/icons/Settings';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import { withRouter, NavLink } from 'react-router-dom';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  list: {
    backgroundColor: '#212121'
  },
  icon: {
    color: '#fafafa'
  },
  primary: {
    color: '#fafafa',
    fontWeight: 500
  }
});

const SideMenu = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <MenuList className={classes.list}>
        <MenuItem>
          <NavLink to="/user"><ListItem>
            <ListItemIcon className={classes.icon}><AccountBox /></ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} primary="User" />
          </ListItem></NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/portfolio"><ListItem>
            <ListItemIcon className={classes.icon}><Assessment /></ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} primary="Portfolio" />
          </ListItem></NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/settings">
            <ListItem>
              <ListItemIcon className={classes.icon}><Settings /></ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} primary="Settings" />
            </ListItem></NavLink>
        </MenuItem>
      </MenuList>
    </div>
  );
}

export default withRouter(withStyles(styles, { withTheme: true })(SideMenu));
