import React from 'react';
import ReactDOM from 'react-dom';

import messages from './messages';
import { IntlProvider } from 'react-intl';

import { flattenMessages } from './utils';

import App from './App';
import './index.css';
if (!window.Intl) {
  require.ensure([
    'intl',
    'intl/locale-data/jsonp/en.js',
    'intl/locale-data/jsonp/fr.js',
    'intl/locale-data/jsonp/es.js'
  ], (require) => {
    require('intl');
    require('intl/locale-data/jsonp/en.js');
    require('intl/locale-data/jsonp/fr.js');
    require('intl/locale-data/jsonp/es.js');
  })
  runApp()
} else {
  runApp()
}

function runApp() {
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
}

