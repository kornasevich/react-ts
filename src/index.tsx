import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './containers/app/app';
import reducer from './containers/reducer/reducer';

import { createStore } from 'redux';
/*import {devToolsEnhancer} from 'redux-devtools-extension';*/

const buildForm = localStorage.getItem('build-form');

const persistedState = buildForm ?
  JSON.parse(buildForm as string)
  : {
    inputForms: [],
    formName: '',
    selectForms: [],
  };

const store = createStore(reducer, persistedState/*, devToolsEnhancer()*/);

store.subscribe(() => {
  localStorage.setItem('build-form', JSON.stringify(store.getState()));
})

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'),
);
