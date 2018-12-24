import Simred, { Store } from 'simred';
import { logger } from 'app/middleware';
import { RootState, RootReducer, rootReducer } from 'app/reducers';
import { History } from 'history';

export function configureStore(history: History, initialState?: RootState): Store<RootState, RootReducer> {
  // if (process.env.NODE_ENV !== 'production') {
  //   middleware = composeWithDevTools(middleware);
  // }

  const store: Store<RootState, RootReducer> = Simred.createStore<RootReducer, RootState>(rootReducer(history), initialState);

  store.addMiddleware(logger);

  // if (module.hot) {
  //   module.hot.accept('app/reducers', () => {
  //     const nextReducer = require('app/reducers');
  //     store.replaceReducer(nextReducer);
  //   });
  // }

  return store;
}
