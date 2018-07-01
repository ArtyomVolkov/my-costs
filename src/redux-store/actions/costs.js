import {
  LOADING_COSTS,
  GET_COSTS,
  ADD_NEW_COST,
  DELETE_COST,
  UPDATE_COST
} from './action-types';

export function loadingCosts () {
  return {
    type: LOADING_COSTS
  };
}

export function receiveCosts (data) {
  return {
    type: GET_COSTS,
    payload: data
  };
}

export function addNewCost (data) {
  return {
    type: ADD_NEW_COST,
    payload: data
  };
}

export function deleteCost (data) {
  return {
    type: DELETE_COST,
    payload: data
  };
}

export function updateCost (data) {
  return {
    type: UPDATE_COST,
    payload: data
  };
}