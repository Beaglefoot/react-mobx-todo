import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './redux/reducer';
import App from './components/App/App';

/* eslint import/extensions: off */
import 'src/styles/global.scss';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const dispatch = store.dispatch;

setInterval(
  () =>
    dispatch({
      type: 'CHANGE_VALUE',
      payload: { index: 1, value: Math.random().toString() }
    }),
  12000
);

const render = Component =>
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('app')
  );

render(App);
