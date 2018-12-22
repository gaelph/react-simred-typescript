import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-simred';
import { createBrowserHistory } from 'history';
import { configureStore } from 'app/store';
// import { Router } from 'react-router';
import { App } from './app';
import { createConnectedRouter } from 'simred-react-router';

// prepare store
const history = createBrowserHistory();
const store = configureStore(history);

const Router = createConnectedRouter('router');

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
