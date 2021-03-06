import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import messages from './messages';
import { IntlProvider } from 'react-intl';

let locale = 
  (navigator.languages && navigator.languages[0])
  || navigator.language
  || navigator.userLanguage
  || `en-US`
ReactDOM.render(
  <IntlProvider locale={locale} message={messages[locale]}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
