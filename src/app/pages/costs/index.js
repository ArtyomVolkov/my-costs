import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import LinearProgress from '@material-ui/core/LinearProgress';
import CostList from './CostList/CostList';

import {fetchCosts} from '../../../actions/costs';

class Index extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchCosts();
  }

  render () {
    const {loading, data} = this.props.costs;

    return (
      <Fragment>
        {
          loading ? <LinearProgress/> : <CostList costs={data}/>
        }
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    costs: state.costs
  };
};

export default connect(mapStateToProps, {fetchCosts})(Index);
