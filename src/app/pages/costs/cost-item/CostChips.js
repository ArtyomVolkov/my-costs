import React, {Component, Fragment} from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Textsms from '@material-ui/icons/Textsms';

import {COST_FIELDS} from '../../../constants/costs';

import './CostChips.scss';

class CostChips extends Component {
  constructor (props) {
    super(props);

    this.state = {
      anchorEl: null,
    };
  }

  handlePopupOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handlePopupClose =() => {
    this.setState({ anchorEl: null });
  };

  render () {
    const {cost} = this.props;
    const {anchorEl} = this.state;

    return (
      <div className='cost-chips'>
        {
          COST_FIELDS.map((item) => {
            if (!cost[item.key]) {
              return null;
            }
            return (
              <Chip
                key={item.key}
                className="chip"
                avatar={
                  <Avatar className="cost-av">
                    <div className="cost-icon">
                      <i className={item.icon}/>
                    </div>
                  </Avatar>
                }
                label={
                  <span className="cost-value">
                  {cost[item.key]}
                </span>
                }
              />
            );
          })
        }
        {
          cost.notes &&
          <Fragment>
            <IconButton onClick={this.handlePopupOpen}>
              <Textsms/>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handlePopupClose}
            >
              <div className="notes-content">
                <span>{cost.notes}</span>
              </div>
            </Menu>
          </Fragment>
        }
      </div>
    );
  }
}

export default CostChips;
