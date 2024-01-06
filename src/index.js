import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Import the i18n setup file

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
