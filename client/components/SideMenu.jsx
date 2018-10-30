import React from 'react';
import { connect } from 'react-redux';
import Overview from '@material-ui/icons/Dns';
import Portfolio from '@material-ui/icons/Assessment';
import Analysis from '@material-ui/icons/DonutSmall';
import Messages from '@material-ui/icons/Mail';
import Profile from '@material-ui/icons/AccountBox';
import Settings from '@material-ui/icons/Settings';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { logout } from '../store/user';

const styles = () => ({
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
  },
  logout: {
    textAlign: 'center',
  }
});

const SideMenu = (props) => {

  const { classes, clickLogout } = props;

  return (
    <div className={classes.root}>
      <MenuList className={classes.list}>

        <MenuItem component="div">
          <NavLink to="/overview"><ListItem>
            <ListItemIcon className={classes.icon}><Overview /></ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} primary="Overview" />
          </ListItem>
          </NavLink>
        </MenuItem>

        <MenuItem component="div">
          <NavLink to="/portfolio"><ListItem>
            <ListItemIcon className={classes.icon}><Portfolio /></ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} primary="Portfolio" />
          </ListItem>
          </NavLink>
        </MenuItem>

        <MenuItem component="div">
          <NavLink to="/analysis"><ListItem>
            <ListItemIcon className={classes.icon}><Analysis /></ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} primary="Analysis" />
          </ListItem></NavLink>
        </MenuItem>

        <MenuItem component="div">
          <NavLink to="/messages"><ListItem>
            <ListItemIcon className={classes.icon}><Messages /></ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} primary="Messages" />
          </ListItem></NavLink>
        </MenuItem>

        <MenuItem component="div">
          <NavLink to="/profile"><ListItem>
            <ListItemIcon className={classes.icon}><Profile /></ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} primary="My Profile" />
          </ListItem></NavLink>
        </MenuItem>

        <MenuItem component="div">
          <NavLink to="/settings">
            <ListItem>
              <ListItemIcon className={classes.icon}><Settings /></ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} primary="Settings" />
            </ListItem></NavLink>
        </MenuItem>

        <MenuItem component="div">
          <ListItem>
            <ListItemText onClick={() => clickLogout()} classes={{ primary: classes.primary }} primary="Log Out" className={classes.logout} />
          </ListItem>
        </MenuItem>
      </MenuList>
    </div>
  );
};


const mapDispatch = dispatch => ({
  clickLogout: () => dispatch(logout())
});

export default withStyles(styles, { withTheme: true })(connect(null, mapDispatch)(SideMenu));

