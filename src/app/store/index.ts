import Simred, { Store } from 'simred';
import { logger } from 'app/middleware';
import { RootState, rootReducer } from 'app/reducers';
import { History } from 'history';

export function configureStore(history: History, initialState?: RootState): Store<RootState> {
  // if (process.env.NODE_ENV !== 'production') {
  //   middleware = composeWithDevTools(middleware);
  // }

  const store = Simred.createStore(rootReducer(history) as any, initialState as any) as Store<
    RootState
  >;

  store.addMiddleware(logger);

  // if (module.hot) {
  //   module.hot.accept('app/reducers', () => {
  //     const nextReducer = require('app/reducers');
  //     store.replaceReducer(nextReducer);
  //   });
  // }

  return store;
}
