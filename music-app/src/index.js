import React from 'react';
import * as Sentry from '@sentry/browser';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import ReactGA from 'react-ga';
import mixpanel from 'mixpanel-browser';
import { MixpanelProvider } from 'react-mixpanel';

// Tracking IDs //
ReactGA.initialize('UA-145979080-2');

mixpanel.init('d94aefc540b96a9d3f4fb06be52a83fd');
//

Sentry.init({
  dsn: 'https://d1fc669b08fb4d33b336f1b64a48ae5b@sentry.io/1537793',
});

// End Tracking IDs //

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <MixpanelProvider mixpanel={mixpanel}>
      <App />
    </MixpanelProvider>
  </Provider>,
  document.getElementById('root'),
);
