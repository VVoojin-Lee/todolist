import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import rootReducer from './_reducers/index';
import axios from 'axios';
import { CookiesProvider } from 'react-cookie';
import './index.css';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.withCredentials = true;



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

root.render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </CookiesProvider>
  </React.StrictMode>,
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
