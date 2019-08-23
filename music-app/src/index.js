import React from 'react';
import * as Sentry from '@sentry/browser';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-145979080-2', { testMode: true });

Sentry.init({
  dsn: 'https://d1fc669b08fb4d33b336f1b64a48ae5b@sentry.io/1537793',
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') || document.createElement('div'),
);
