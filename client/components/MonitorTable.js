import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class MonitorTable extends React.Component {
  render() {
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ticker</TableCell>
              <TableCell numeric>Position</TableCell>
              <TableCell numeric>Last Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>GOOG</TableCell>
              <TableCell numeric>10</TableCell>
              <TableCell numeric>1001</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>IBM</TableCell>
              <TableCell numeric>100</TableCell>
              <TableCell numeric>137</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>AMZN</TableCell>
              <TableCell numeric>38</TableCell>
              <TableCell numeric>1907</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
export default MonitorTable;
