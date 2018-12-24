import { createReducer } from 'simred';
import { RootState } from './state';
import { TodoModel } from 'app/models';

const initialState: RootState.TodoState = [
  {
    id: 1,
    text: 'Use Redux',
    completed: false
  }
];

export const actions = {
  addTodo: (state: RootState.TodoState) => (todo: TodoModel) => {
    if (todo && todo.text) {
      return [
        {
          id: state.reduce((max, todo) => Math.max(todo.id || 1, max), 0) + 1,
          completed: false,
          text: todo.text
        },
        ...state
      ];
    }
    return state;
  },
  deleteTodo: (state: RootState.TodoState) => (id: TodoModel['id']) => {
    return state.filter((todo) => todo.id !== id);
  },
  editTodo: (state: RootState.TodoState) => (payload: TodoModel) => {
    return state.map((todo) => {
      if (!todo || !payload) {
        return todo;
      }
      return (todo.id || 0) === payload.id ? { ...todo, text: payload.text } : todo;
    });
  },
  completeTodo: (state: RootState.TodoState) => (id: TodoModel['id']) => {
    return state.map((todo) =>
      todo.id === (id as any) ? { ...todo, completed: !todo.completed } : todo
    );
  },
  completeAll: (state: RootState.TodoState) => () => {
    return state.map((todo) => ({ ...todo, completed: true }));
  },
  clearCompleted: (state: RootState.TodoState) => () => {
    return state.filter((todo) => todo.completed === false);
  }
};

export type TodoActions = {
  addTodo: (todo: Partial<TodoModel>) => void;
  deleteTodo: (id: TodoModel['id']) => void;
  editTodo: (todo: Partial<TodoModel>) => void;
  completeTodo: (todo: TodoModel['id']) => void;
  completeAll: () => void;
  clearCompleted: () => void;
};

export const todoReducer = createReducer(actions, initialState);
