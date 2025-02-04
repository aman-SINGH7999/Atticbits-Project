import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import { store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'

const root = ReactDOM.createRoot(document.getElementById('root'));
let persister = persistStore(store);
root.render(
  <Provider store={store} >
    <PersistGate persistor={persister}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);


