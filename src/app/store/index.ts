import Simred, { Store } from 'simred';
import { logger } from 'app/middleware';
import { RootState, RootReducer, rootReducer } from 'app/reducers';
import { History } from 'history';
import devToolsMiddleware from 'simred-dev-tools';

export function configureStore(history: History, initialState?: RootState): Store<RootState, RootReducer> {
  const middlewares = []
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(devToolsMiddleware)
  }

  const store: Store<RootState, RootReducer> = Simred.createStore<RootReducer, RootState>(rootReducer(history), initialState, middlewares);

  store.addMiddleware(logger);

  // if (module.hot) {
  //   module.hot.accept('app/reducers', () => {
  //     const nextReducer = require('app/reducers');
  //     store.replaceReducer(nextReducer);
  //   });
  // }

  return store;
}
