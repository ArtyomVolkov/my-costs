import STORE from '../../redux-store/index';
import {loadingCosts, receiveCosts} from '../../redux-store/actions/costs';
import {createNewCost, deleteCostById, editCost} from '../../actions/costs';

const REDUX_ACTIONS = {
  createCost: (data) => {
    STORE.dispatch(createNewCost(data))
  },
  deleteCost: (costId) => {
    return STORE.dispatch(deleteCostById(costId));
  },
  loadingCosts: () => {
    STORE.dispatch(loadingCosts());
  },
  receiveCosts: (data) => {
    STORE.dispatch(receiveCosts(data));
  },
  updateCost: (data) => {
    return STORE.dispatch(editCost(data));
  },
  clearCosts: () => {

  }
};

export default REDUX_ACTIONS;
