import { applyMiddleware, createStore, compose } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

const configureStore = () => {
  // const middlewares = [middleWare];
  // const enhancer =
  //   process.env.NODE_ENV === 'production'
  //     ? compose(applyMiddleware(...middlewares))
  //     : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV !== 'production',
});

export default wrapper;
