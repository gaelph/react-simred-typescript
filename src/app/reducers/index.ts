import { RootState } from './state';
import { todoReducer, TodoActions } from './todos';
import { createRouterReducer, RouterReducerType } from 'simred-react-router';
import { History } from 'history';

export { RootState };

// NOTE: current type definition of Reducer in 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = (history: History) => ({
  router: createRouterReducer(history) as RouterReducerType,
  todos: todoReducer as any
});

export type RootReducer = {
  router: RouterReducerType;
  todos: TodoActions;
};
