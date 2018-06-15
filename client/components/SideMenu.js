import React from 'react';
import Routes from '../routes';
import MonitorTable from './MonitorTable';
import AccountBox from '@material-ui/icons/AccountBox';
import InboxIcon from '@material-ui/icons/Inbox';
//import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
  },
});

class SideMenu extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <MenuList>
          <MenuItem>
            <ListItem>
              <ListItemIcon><AccountBox /></ListItemIcon>
              <ListItemText inset primary="User" />
            </ListItem>
          </MenuItem>
          <MenuItem>
            <ListItem>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText inset primary="Portfolio" />
            </ListItem>
          </MenuItem>
          <MenuItem>
            <ListItem>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText inset primary="Settings" />
            </ListItem>
          </MenuItem>
        </MenuList>
        <MonitorTable />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SideMenu);
