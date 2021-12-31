import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, combineReducers } from 'redux';
import common, { ICommonState } from './common';

export interface RootState {
  common: ICommonState;
}

const rootReducer = (state: RootState | undefined, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        common,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
