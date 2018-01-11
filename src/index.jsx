import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';

/* eslint import/extensions: off */
import 'src/styles/global.scss';

const render = Component => (
  ReactDOM.render(
    <Component />,
    document.getElementById('app')
  )
);

render(App);
