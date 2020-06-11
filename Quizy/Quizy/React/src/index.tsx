import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import './index.scss';
import './skeleton.scss';
import './skeleton.normalize.scss';
import axios from 'axios';
import environment from './environment';

axios.defaults.baseURL = environment.baseUrl;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
