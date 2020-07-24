import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from '../reducers';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware()
    const middlewares = [sagaMiddleware];

    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares))
        : composeWithDevTools(applyMiddleware(...middlewares));

    const store = createStore(
      rootReducer,
      enhancer
    );
  
    sagaMiddleware.run(rootSaga);
    return store;
  }