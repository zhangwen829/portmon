import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
class MonitorTable extends React.Component {
  render() {
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ticker</TableCell>
              <TableCell>Ticker</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Last Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>GOOG</TableCell>
              <TableCell>GOOG</TableCell>
              <TableCell numeric>10</TableCell>
              <TableCell numeric>1001</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>IBM</TableCell>
              <TableCell>IBM</TableCell>
              <TableCell numeric>100</TableCell>
              <TableCell numeric>137</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>IBM</TableCell>
              <TableCell>AMZN</TableCell>
              <TableCell numeric>38</TableCell>
              <TableCell numeric>1907</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}
export default MonitorTable;