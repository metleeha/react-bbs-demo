import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from '../reducers';
import { tempSetUser, check } from '../reducers/auth';

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
    
    // 로그인 상태 유지 
    function loadUser() {
      try {
        const user = localStorage.getItem('user');
        if (!user) return;

        store.dispatch(tempSetUser(user));
        store.dispatch(check());
      } catch (e) {
        console.log('localStorage is not working')
      }
    }

    loadUser();

    return store;
  }