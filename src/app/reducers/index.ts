import { RootState } from './state';
import { todoReducer } from './todos';
import { createRouterReducer } from 'simred-react-router' 
import { History } from 'history';

export { RootState };

// NOTE: current type definition of Reducer in 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = (history: History) => ({
  router: createRouterReducer(history),
  todos: todoReducer as any
})

