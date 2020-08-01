/**
 * Components using the react-intl module require access to the intl context.
 * This is not available when mounting single components in Enzyme.
 * These helper functions aim to address that and wrap a valid,
 * English-locale intl context around them.
 */

import React from 'react';
import {IntlProvider} from 'react-intl';
import {mount, shallow} from 'enzyme';
import {flattenMessages} from './utils'
// You can pass your messages to the IntlProvider. Optional: remove if unneeded.
import messages from './messages'
const defaultLocale = 'en-US';
const locale = defaultLocale;
const flattenedMessages = flattenMessages(messages[locale])


export function mountWithIntl(node) {
  return mount(node, {
    wrappingComponent: IntlProvider,
    wrappingComponentProps: {
      locale,
      defaultLocale,
      flattenedMessages,
    },
  });
}

export function shallowWithIntl(node) {
  return shallow(node, {
    wrappingComponent: IntlProvider,
    wrappingComponentProps: {
      locale,
      defaultLocale,
      flattenedMessages,
    },
  });
}