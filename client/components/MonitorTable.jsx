import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import Trend from 'react-trend';
import { connect } from 'react-redux';
const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 5
  },
  headColor: {
    backgroundColor: '#212121'
  },
  head: {
    fontSize: 18,
    color: '#fafafa'
  },
  cell: {
    fontSize: 15,
    color: '#424242'
  },
  light: {
    backgroundColor: '#eeeeee'
  },
  dark: {
    backgroundColor: '#aeaeae'
  }
});

const MonitorTable = (props) => {
  const { classes, sessionSecurities } = props;
  return (
    <Paper className={classes.root}>
      <Table >
        <TableHead>
          <TableRow className={classes.headColor}>
            <TableCell className={classes.head}>Ticker</TableCell>
            <TableCell className={classes.head} numeric>Position</TableCell>
            <TableCell className={classes.head} numeric>Last Price</TableCell>
            <TableCell className={classes.head}>Trend</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            Array.of(...sessionSecurities.values()).map((sessionSecurity, idx) => {
              if (idx % 2 === 0) {
                return (<TableRow className={classes.light} key={sessionSecurity.id}>
                  <TableCell className={classes.cell}>{sessionSecurity.ticker}</TableCell>
                  <TableCell className={classes.cell} numeric>{sessionSecurity.position}</TableCell>
                  <TableCell className={classes.cell} numeric>{sessionSecurity.lastPrice}</TableCell>
                  <TableCell><Trend data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]} /></TableCell>
                </TableRow>)
              } else {
                return (<TableRow className={classes.dark} key={sessionSecurity.id}>
                  <TableCell className={classes.cell}>{sessionSecurity.ticker}</TableCell>
                  <TableCell className={classes.cell} numeric>{sessionSecurity.position}</TableCell>
                  <TableCell className={classes.cell} numeric>{sessionSecurity.lastPrice}</TableCell>
                  <TableCell><Trend data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]} /></TableCell>
                </TableRow>)
              }

            })
          }
        </TableBody>
      </Table>
    </Paper>
  );
};
const mapStateToProps = (state) => ({
  sessionSecurities: state.portfolios.sessionSecurities,
});

export default withStyles(styles)(connect(mapStateToProps)(MonitorTable));
