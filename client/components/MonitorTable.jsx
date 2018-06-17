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
                <TableCell className={classes.cellText} numeric>{sessionSecurity.lastPrice}</TableCell>
                <TableCell><Trend data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]} /></TableCell>
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
