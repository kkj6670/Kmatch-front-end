import { applyMiddleware, createStore, compose, Middleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  console.log(`TYPE: ${action.type}, PAYLOAD: ${JSON.stringify(action.payload)}`);
  const result = next(action);
  return result;
};

const configureStore = () => {
  const middlewares = [loggerMiddleware];
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(reducer, enhancer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV !== 'production',
});

export default wrapper;
