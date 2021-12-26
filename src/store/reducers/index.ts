import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, combineReducers } from 'redux';
import common, { ICommonState, I } from './common';

export interface RootState {
  common: ICommonState;
}

interface IAction extends AnyAction {
  payload: any;
}

const rootReducer = (state: RootState | undefined, action: IAction) => {
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
