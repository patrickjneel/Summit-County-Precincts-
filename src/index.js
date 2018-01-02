import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/app/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import rootReducers from '../src/reducers/rootReducers';
import logger from 'redux-logger';


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducers, devTools);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
