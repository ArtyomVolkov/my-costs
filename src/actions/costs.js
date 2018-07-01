import {
  onCreateCost,
  onGetCosts,
  onRemoveCost,
  onUpdateCost
} from '../app/endpoints/costs';
import {
  loadingCosts,
  receiveCosts,
  addNewCost,
  deleteCost,
  updateCost
} from '../redux-store/actions/costs';

export function fetchCosts () {
  return function (dispatch) {
    dispatch(loadingCosts());

    onGetCosts().then((resp) => {
      dispatch(receiveCosts(resp));
    }).catch((error) => {
    });
  };
}

export function createNewCost (data) {
  return function (dispatch) {
    return onCreateCost(data).then((resp) => {
      dispatch(addNewCost(resp));
    });
  };
}

export function editCost (data) {
  return function (dispatch) {
    return onUpdateCost(data).then((resp) => {
      dispatch(updateCost(resp));
    });
  };
}

export function deleteCostById (costId) {
  return function (dispatch) {
    return onRemoveCost(costId).then((resp) => {
      dispatch(deleteCost(costId));
      return resp;
    });
  };
}