import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, combineReducers } from 'redux';
import common from './common';

const rootReducer = combineReducers({
  index: (action: AnyAction, state = {}) => {
    switch (action?.type) {
      case HYDRATE:
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  },
  common,
});

export default rootReducer;
