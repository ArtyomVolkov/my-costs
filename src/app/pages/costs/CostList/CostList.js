import React, {Component} from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import DateRange from '@material-ui/icons/DateRange';
import Description from '@material-ui/icons/Description';
import Payment from '@material-ui/icons/Payment';
import Settings from '@material-ui/icons/Settings';

import CostItem from '../cost-item/CostItem';

import './CostList.scss';

class CostList extends Component {
  renderNoTableData = () => {
    return (
      <div>
        No data
      </div>
    );
  };

  renderRows = (costs) => {
    return costs.map((cost) => (<CostItem key={cost.id} cost={cost} />));
  };

  render () {
    const {costs} = this.props;

    if (!costs || !costs.length) {
      return this.renderNoTableData();
    }

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <div className='th-label'>
                <DateRange/>
                <label>Date</label>
              </div>
            </TableCell>
            <TableCell style={{width: 600}}>
              <div className='th-label'>
                <Description/>
                <label>Cost types</label>
              </div>
            </TableCell>
            <TableCell numeric>
              <div className='th-label'>
                <Payment/>
                <label>Value</label>
              </div>
            </TableCell>
            <TableCell>
              <div className='th-label'>
                <Settings/>
                <label>Actions</label>
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.renderRows(costs)}
        </TableBody>
      </Table>
    );
  }
}

export default CostList;
