import {
  GET_COSTS,
  ADD_NEW_COST,
  DELETE_COST,
  UPDATE_COST,
  LOADING_COSTS
} from '../actions/action-types';

const defaultState = {
  loading: false,
  data: null
};

export default function costs (state = defaultState, action) {
  switch (action.type) {
    case LOADING_COSTS: {
      return {...state, loading: true};
    }
    case ADD_NEW_COST: {
      const costs = [...state.data];
      costs.push(action.payload);
      return {...state, data: costs};
    }
    case DELETE_COST: {
      const costs = [...state.data];
      const costIndex = costs.findIndex((item) => item.id === action.payload);
      costs.splice(costIndex, 1);
      return {...state, data: costs};
    }
    case UPDATE_COST: {
      const costs = [...state.data];
      const costIndex = costs.findIndex((item) => item.id === action.payload.id);
      costs[costIndex] = action.payload;
      return {...state, data: costs};
    }
    case GET_COSTS: {
      return {...state, loading: false, data: action.payload};
    }
    default:
      return state;
  }
}