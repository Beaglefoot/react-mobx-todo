import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/App/App';
import Footer from './components/Footer/Footer';

/* eslint import/extensions: off */
import 'src/styles/global.scss';

const render = Component => (
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )
);

render(App);

(new Footer).appendToDocument();
