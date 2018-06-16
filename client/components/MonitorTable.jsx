import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import Trend from 'react-trend';
import io from 'socket.io-client';

const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 5
  },
  table: {
    backgroundColor: '#9E9E9E'
  },
  cell: {
    fontSize: 15,
    color: '#212121'
  }
});

const MonitorTable = (props) => {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.cell}>Ticker</TableCell>
            <TableCell className={classes.cell} numeric>Position</TableCell>
            <TableCell className={classes.cell} numeric>Last Price</TableCell>
            <TableCell className={classes.cell}>Trend</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={classes.cell}>GOOG</TableCell>
            <TableCell className={classes.cell} numeric>10</TableCell>
            <TableCell className={classes.cell} numeric>1001</TableCell>
            <TableCell><Trend data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.cell}>IBM</TableCell>
            <TableCell className={classes.cell} numeric>100</TableCell>
            <TableCell className={classes.cell} numeric>137</TableCell>
            <TableCell><Trend data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.cell}>AMZN</TableCell>
            <TableCell className={classes.cell} numeric>38</TableCell>
            <TableCell className={classes.cell} numeric>1907</TableCell>
            <TableCell><Trend data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]} /></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};


export default withStyles(styles)(MonitorTable);