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
    backgroundColor: '#9E9E9E'
  }
});

const SideMenu = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <MenuList className={classes.list}>
        <MenuItem>
          <NavLink to="/user"><ListItem>
            <ListItemIcon><AccountBox /></ListItemIcon>
            <ListItemText inset primary="User" />
          </ListItem></NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/portfolio"><ListItem>
            <ListItemIcon><Assessment /></ListItemIcon>
            <ListItemText inset primary="Portfolio" />
          </ListItem></NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/settings">
            <ListItem>
              <ListItemIcon><Settings /></ListItemIcon>
              <ListItemText inset primary="Settings" />
            </ListItem></NavLink>
        </MenuItem>
      </MenuList>
    </div>
  );
}

export default withRouter(withStyles(styles, { withTheme: true })(SideMenu));
