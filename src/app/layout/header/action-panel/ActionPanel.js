import React from 'react';

import Button from '@material-ui/core/Button';
import AddCircle from '@material-ui/icons/AddCircle';

import NewCost from '../../../components/dialogs/new-cost/NewCost';

import './ActionPanel.scss';

class ActionPanel extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      openDialog: false
    };
  }

  handleDialogOpen = () => {
    this.setState({openDialog: true});
  };

  handleDialogClose = () => {
    this.setState({openDialog: false});
  };

  openNewCostsDialog = () => {
    this.handleDialogOpen();
  };

  render () {
    const {openDialog} = this.state;

    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.openNewCostsDialog}
        >
          <AddCircle/>
          <span className="btn-label">New Cost</span>
        </Button>
        {
          openDialog &&
          <NewCost
            open
            handleDialogClose={this.handleDialogClose}
          />
        }
      </div>
    );
  }
}

export default ActionPanel;
