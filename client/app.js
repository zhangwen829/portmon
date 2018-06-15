import React from 'react';
import Routes from './routes';
import Drawer from '@material-ui/core/Drawer';
import AccountBox from '@material-ui/icons/AccountBox';
import InboxIcon from '@material-ui/icons/Inbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { withStyles } from '@material-ui/core/styles';
import { MonitorTable } from './components';

const styles = theme => ({
  root: {
    display: 'flex',
    position: 'relative',
    width: '100%',
  },
  drawerPaper: {
    position: 'relative',
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
  }
});

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Drawer classes={{
          paper: classes.drawerPaper,
        }} anchor='left' variant='permanent' open={false}>
          <List component='nav'>
            <ListItem button>
              <ListItemIcon><AccountBox /></ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
            </ListItem>
          </List>
        </Drawer>
        <MonitorTable />
      </div>
    );
  }
};

export default withStyles(styles, { withTheme: true })(App);