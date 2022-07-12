import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import storeConfig from './config/store';
import { Provider } from 'react-redux';

import "./index.css";

const store = storeConfig();

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
