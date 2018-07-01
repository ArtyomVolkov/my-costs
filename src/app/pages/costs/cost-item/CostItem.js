import React, {Fragment} from 'react';
import moment from 'moment/moment';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';

import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';

import REDUX_ACTIONS from '../../../services/ReduxActions';
import EditCost from '../../../components/dialogs/edit-cost/EditCost';
import CostChips from './CostChips';

class CostItem extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isOpenEditDialog: false
    };
  }

  getGeneralCost = (data) => {
    let sum = 0;
    Object.keys(data).forEach((key) => {
      if (key === 'id' || key === 'date' || key === 'notes') {
        return;
      }
      sum += data[key];
    });
    return sum;
  };

  onDeleteCost = () => {
    const {cost} = this.props;
    REDUX_ACTIONS.deleteCost(cost.id);
  };

  onEditCost = () => {
    this.setState({isOpenEditDialog: true});
  };

  onCloseDialog =() => {
    this.setState({isOpenEditDialog: false});
  };

  render () {
    const {cost} = this.props;
    const {isOpenEditDialog} = this.state;

    return (
      <Fragment>
        <TableRow key={cost.id}>
          <TableCell>
            <span>{cost.date && moment(cost.date).format('LL')}</span>
          </TableCell>
          <TableCell>
            <CostChips cost={cost} />
          </TableCell>
          <TableCell>
            {this.getGeneralCost(cost)}
          </TableCell>
          <TableCell>
            <IconButton onClick={this.onEditCost}>
              <Edit />
            </IconButton>
            <IconButton onClick={this.onDeleteCost}>
              <Delete />
            </IconButton>
          </TableCell>
        </TableRow>
        {
          isOpenEditDialog &&
            <EditCost
              handleDialogClose={this.onCloseDialog}
              cost={cost}
            />
        }
      </Fragment>
    );
  }
}

export default CostItem;
