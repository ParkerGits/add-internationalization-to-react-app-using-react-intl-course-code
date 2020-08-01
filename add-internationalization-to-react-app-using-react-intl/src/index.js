import React from 'react';
import ReactDOM from 'react-dom';

import messages from './messages';
import { IntlProvider } from 'react-intl';

import { flattenMessages } from './utils';

import App from './App';
import './index.css';

let locale = (navigator.languages && navigator.languages[0])
             || navigator.language
             || navigator.userLanguage
             || 'en-US';

ReactDOM.render(
  <IntlProvider locale={locale} defaultLocale="en-US" messages={flattenMessages(messages[locale])}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);