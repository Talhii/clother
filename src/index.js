import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <PersistGate persistor={persistor}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </PersistGate> */}
  </Provider>
  // </React.StrictMode>
);

reportWebVitals();