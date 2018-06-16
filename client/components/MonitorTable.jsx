import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import io from 'socket.io-client';

const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 5
  },
  table: {
    backgroundColor: '#01579B'
  },
  cell: {
    fontSize: 15,
    color: '#FAFAFA'
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
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={classes.cell}>GOOG</TableCell>
            <TableCell className={classes.cell} numeric>10</TableCell>
            <TableCell className={classes.cell} numeric>1001</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.cell}>IBM</TableCell>
            <TableCell className={classes.cell} numeric>100</TableCell>
            <TableCell className={classes.cell} numeric>137</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.cell}>AMZN</TableCell>
            <TableCell className={classes.cell} numeric>38</TableCell>
            <TableCell className={classes.cell} numeric>1907</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};


export default withStyles(styles)(MonitorTable);