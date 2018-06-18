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
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ArrowForward from '@material-ui/icons/ArrowForward';
const styles = theme => ({
  root: {
    marginLeft: theme.spacing.unit * 5
  },
  headBackground: {
    backgroundColor: '#212121'
  },
  headText: {
    fontSize: 18,
    color: '#fafafa'
  },
  cellText: {
    fontSize: 15,
    color: '#424242'
  },
  cellLastPriceUp: {
    fontSize: 15,
    color: '#d50000'
  },
  cellLastPriceDown: {
    fontSize: 15,
    color: '#388e3c'
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
          <TableRow className={classes.headBackground}>
            <TableCell className={classes.headText}>Ticker</TableCell>
            <TableCell className={classes.headText} numeric>Position</TableCell>
            <TableCell className={classes.headText} numeric>Last Price</TableCell>
            <TableCell className={classes.headText}>Trend</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            Array.of(...sessionSecurities.values()).map((sessionSecurity, idx) => {
              return (<TableRow className={idx % 2 === 0 ? classes.light : classes.dark} key={sessionSecurity.id}>
                <TableCell className={classes.cellText}>{sessionSecurity.ticker}</TableCell>
                <TableCell className={classes.cellText} numeric>{sessionSecurity.position}</TableCell>
                <TableCell className={
                  sessionSecurity.upward === undefined ? classes.cellText : (sessionSecurity.upward ? classes.cellLastPriceUp : classes.cellLastPriceDown)
                } numeric>
                  {sessionSecurity.lastPrice} {sessionSecurity.upward === undefined ? <ArrowForward /> : (sessionSecurity.upward ? <ArrowUpward /> : <ArrowDownward />)}
                </TableCell>
                <TableCell><Trend data={sessionSecurity.trend} /></TableCell>
              </TableRow>);
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
