import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import {createNewCost} from '../../../../actions/costs';
import {COST_FIELDS} from '../../../constants/costs';

import './NewCostStyle.scss';

class NewCost extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      submitting: false,
      fields: null
    };
    this.fields = {
      date: Date.now()
    };
  }

  onSave = () => {
    const {createNewCost, handleDialogClose} = this.props;

    this.setState({submitting: true});
    createNewCost(this.fields)
      .then(() => {
        this.setState({submitting: false});
        handleDialogClose();
      })
      .catch(() => {
        this.setState({submitting: false});
      });
  };

  onChangeFiled = (e) => {
    const {name, value} = e.target;
    let fieldValue = value;

    switch (name) {
      case 'date': {
        fieldValue = value ? Date.now() : null;
        break;
      }
      case 'notes': {
        fieldValue = `'${value}'`;
        break;
      }
      default:
        fieldValue = !value.length ? null : +value;
    }

    this.fields[name] = fieldValue;
  };

  isDisableSubmit = () => {
    return !this.fields.date;
  };

  render () {
    const {open, handleDialogClose} = this.props;
    const {submitting} = this.state;

    return (
      <Dialog
        open={open}
        onClose={handleDialogClose}
        disableBackdropClick
      >
        <DialogTitle>New Cost</DialogTitle>
        <Divider/>
        <DialogContent>
          <div className={`new-cost-form${submitting ? ' submitting' : ''}`}>
            <div className="form-field">
              <i className="far fa-calendar-alt"/>
              <TextField
                fullWidth
                name="date"
                defaultValue={moment(this.fields.date).format('YYYY-MM-DD')}
                type="date"
                helperText="Select Date"
                onChange={this.onChangeFiled}
              />
            </div>
            <Grid container spacing={16} className="costs-grid">
              {
                COST_FIELDS.map((item) => {
                  return (
                    <Grid item key={item.key} xs={4} sm={4}>
                      <div className="form-field">
                        <i className={item.icon}/>
                        <TextField
                          fullWidth
                          name={item.key}
                          type={item.type}
                          placeholder={item.placeholder}
                          onChange={this.onChangeFiled}
                        />
                      </div>
                    </Grid>
                  );
                })
              }
            </Grid>
            <div className="form-field">
              <i className="fas fa-comment-alt"/>
              <TextField
                fullWidth
                name="notes"
                placeholder="Description"
                helperText="Simple cost description"
                onChange={this.onChangeFiled}
              />
            </div>
          </div>
        </DialogContent>
        <Divider/>
        <div className="progress-bar">
          {submitting && <LinearProgress/>}
        </div>
        <DialogActions>
          <Button
            color="primary"
            onClick={this.onSave}
            disabled={this.isDisableSubmit()}
          >
            Save
          </Button>
          <Button
            onClick={handleDialogClose}
            color="secondary"
            autoFocus
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default connect(null, {createNewCost})(NewCost);
