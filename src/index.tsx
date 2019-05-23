import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/app/app';
import reducer from './containers/reducer/reducer';

import { createStore } from 'redux';
import { devToolsEnhancer  } from 'redux-devtools-extension';
const store = createStore(reducer, devToolsEnhancer());


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'),
);
