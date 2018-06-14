import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import InboxIcon from '@material-ui/icons/Inbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

class NavDrawer extends React.Component {
  render() {
    return (
      <div>
        <Drawer anchor='left' variant='permanent' open={false}>
          <List component='nav'>
            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
            </ListItem>
          </List>
        </Drawer>
      </div>
    );
  }
}

export default NavDrawer;